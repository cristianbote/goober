#!/usr/bin/env node
// Run A/B compare bench N times and aggregate medians.
// Usage: node benchmarks/run-ab.cjs <bench-file> <baseline-dir> <candidate-dir> <runs>
const { spawnSync } = require('child_process');
const path = require('path');

const benchFile = process.argv[2];
const baseDir = process.argv[3];
const candDir = process.argv[4];
const runs = parseInt(process.argv[5] || '3', 10);

if (!benchFile || !baseDir || !candDir) {
    console.error('Usage: node run-ab.cjs <bench-file> <baseline-dir> <candidate-dir> <runs>');
    process.exit(1);
}

const all = [];
for (let i = 0; i < runs; i++) {
    process.stderr.write(`run ${i + 1}/${runs}... `);
    const t0 = Date.now();
    const r = spawnSync('node', [path.resolve(benchFile), baseDir, candDir], {
        env: { ...process.env, NODE_ENV: 'production' },
        encoding: 'utf8',
        maxBuffer: 16 * 1024 * 1024
    });
    process.stderr.write(`${Date.now() - t0}ms\n`);
    if (r.status !== 0) {
        console.error('Bench failed:', r.stderr);
        process.exit(1);
    }
    const m = r.stdout.match(/JSON:(.+)/);
    if (!m) {
        console.error('No JSON output:', r.stdout);
        process.exit(1);
    }
    all.push(JSON.parse(m[1]));
}

// Aggregate
const byName = {};
for (const run of all) {
    for (const t of run.tests) {
        if (!byName[t.name]) byName[t.name] = { a: [], b: [], deltas: [], noises: [] };
        byName[t.name].a.push(t.a);
        byName[t.name].b.push(t.b);
        byName[t.name].deltas.push(t.delta);
        byName[t.name].noises.push(t.noise);
    }
}

const median = (arr) => {
    const s = [...arr].sort((a, b) => a - b);
    return s[Math.floor(s.length / 2)];
};

const summary = [];
for (const [name, data] of Object.entries(byName)) {
    summary.push({
        name,
        a_med: Math.round(median(data.a)),
        b_med: Math.round(median(data.b)),
        delta_med: +median(data.deltas).toFixed(2),
        delta_min: +Math.min(...data.deltas).toFixed(2),
        delta_max: +Math.max(...data.deltas).toFixed(2),
        noise_med: +median(data.noises).toFixed(2)
    });
}

console.log(JSON.stringify({ runs, summary }, null, 2));

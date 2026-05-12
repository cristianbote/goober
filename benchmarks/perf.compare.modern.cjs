// AB bench against modern dists.
const Benchmark = require('benchmark');
const path = require('path');

const baselineDir = path.resolve(process.argv[2] || './dist-baseline');
const candidateDir = path.resolve(process.argv[3] || './dist');

const react = require('react');
const { renderToString: render } = require('react-dom/server');

const inner = (props) => ({
    opacity: props.counter > 0.5 ? 1 : 0,
    '@media (min-width: 1px)': { rule: 'all' },
    '&:hover': { another: 1, display: 'space' }
});
const tagged = `
    opacity: ${(props) => (props.counter > 0.5 ? 1 : 0)};
    @media (min-width: 1px) { rule: all; }
    &:hover { another: 1; display: space; }
`;
const arr = (props) => [
    {
        opacity: 0,
        '@media (min-width: 1px)': { rule: 'all' },
        '&:hover': { another: 1, display: 'space' }
    },
    props.counter > 0.5 && { opacity: 1 }
];

const hitObj = {
    color: 'red',
    padding: '8px 16px',
    fontSize: 14,
    opacity: 0.5,
    '&:hover': { color: 'peachpuff' }
};

function r(Foo) {
    render(react.createElement(Foo, { counter: Math.random() }));
}

(async () => {
    const nsA = await import(path.join(baselineDir, 'goober.modern.js'));
    const nsB = await import(path.join(candidateDir, 'goober.modern.js'));

    const A = {
        styled: nsA.styled,
        css: nsA.css,
        setup: nsA.setup,
        keyframes: nsA.keyframes,
        glob: nsA.glob,
        extractCss: nsA.extractCss
    };
    const B = {
        styled: nsB.styled,
        css: nsB.css,
        setup: nsB.setup,
        keyframes: nsB.keyframes,
        glob: nsB.glob,
        extractCss: nsB.extractCss
    };

    A.setup(react.createElement);
    B.setup(react.createElement);

    const A_obj = A.styled('div')(inner);
    const A_tagged = A.styled('div')`${tagged}`;
    const A_array = A.styled('div')(arr);

    const B_obj = B.styled('div')(inner);
    const B_tagged = B.styled('div')`${tagged}`;
    const B_array = B.styled('div')(arr);

    A.css(hitObj);
    B.css(hitObj);
    A.css`color: red; padding: 4px;`;
    B.css`color: red; padding: 4px;`;

    const suite = new Benchmark.Suite('AB-modern');
    suite
        .add('A:render:object', () => r(A_obj))
        .add('B:render:object', () => r(B_obj))
        .add('A:render:tagged', () => r(A_tagged))
        .add('B:render:tagged', () => r(B_tagged))
        .add('A:render:array', () => r(A_array))
        .add('B:render:array', () => r(B_array))
        .add('A:css:object hit', () => A.css(hitObj))
        .add('B:css:object hit', () => B.css(hitObj))
        .add('A:css:tagged hit', () => A.css`color: red; padding: 4px;`)
        .add('B:css:tagged hit', () => B.css`color: red; padding: 4px;`)
        .on('cycle', (e) => console.log('▸', String(e.target)))
        .on('complete', function () {
            const results = {};
            this.forEach((b) => {
                const m = b.name.match(/^([AB]):(.+)$/);
                const [, ab, name] = m;
                if (!results[name]) results[name] = {};
                results[name][ab] = { ops: b.hz, rme: b.stats.rme };
            });
            console.log('\n--- A vs B (modern) ---');
            const json = { tests: [] };
            for (const [name, { A: a, B: b }] of Object.entries(results)) {
                const delta = ((b.ops - a.ops) / a.ops) * 100;
                const noise = Math.max(a.rme, b.rme);
                console.log(
                    name.padEnd(22) +
                        Math.round(a.ops).toLocaleString().padStart(13) +
                        ' -> ' +
                        Math.round(b.ops).toLocaleString().padStart(13) +
                        '  Δ=' +
                        delta.toFixed(2).padStart(6) +
                        '%  ±' +
                        noise.toFixed(2).padStart(4) +
                        '%'
                );
                json.tests.push({
                    name,
                    a: Math.round(a.ops),
                    b: Math.round(b.ops),
                    delta: +delta.toFixed(2),
                    noise: +noise.toFixed(2)
                });
            }
            console.log('\nJSON:' + JSON.stringify(json));
        })
        .run({ async: true });
})();

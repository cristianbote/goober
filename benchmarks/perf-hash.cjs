const Benchmark = require('benchmark');

const str = `abcdefghijklmnopqrstuvwyxz ABCDEFGHIJKLMNOPQRSTUVWYXZ 0123456789`;
const getUint32 = (arr, i) =>
    arr[i] | (arr[(i + 1) | 0] << 8) | (arr[(i + 2) | 0] << 16) | (arr[(i + 3) | 0] << 24);
const rotl32 = (x, r) => (x << r) | (x >>> (32 - r));
const encoder = new TextEncoder();
let bufferLength = 2 * 1024;
let buffer = new ArrayBuffer(bufferLength);
let uint8View = new Uint8Array(buffer);
let int32View = new Int32Array(buffer);

const suite = new Benchmark.Suite('HASH!');
suite
    .add('goober original HASH', () => {
        const c = 'go' + str.split('').reduce((out, s) => (101 * out + s.charCodeAt(0)) >>> 0, 11);
    })
    .add('goober optimized HASH', () => {
        let i = 0,
            l = str.length,
            out = 11;
        while (i < l) out = (101 * out + str.charCodeAt(i++)) >>> 0;
        const c = 'go' + out;
    })
    .add('goober optimized HASH with ASM hints', () => {
        let i = 0,
            l = str.length,
            out = 11;
        while (i < l) out = ((Math.imul(101, out) + str.charCodeAt(i++)) | 0) >>> 0;
        const c = 'go' + out;
    })
    .add('twind HASH', () => {
        let i = str.length - 1,
            out = 9;
        while (i >= 0) out = Math.imul(out ^ str.charCodeAt(i--), 0x5f356495);
        const c = 'go' + ((out ^ (out >>> 9)) >>> 0).toString(36);
    })
    .add('xxh', () => {
        if (str.length > bufferLength) {
            // buffer.resize() is only available in recent browsers, so we re-allocate
            // a new and views
            bufferLength = str.length + (4 - (str.length % 4));
            buffer = new ArrayBuffer(bufferLength);

            uint8View = new Uint8Array(buffer);
            int32View = new Int32Array(buffer);
        }

        const length8 = encoder.encodeInto(str, uint8View).written;

        const buf = uint8View;

        const seed = 0;
        const len = length8 | 0;
        let i = 0;
        let h = (((seed + len) | 0) + 0x165667b1) | 0;

        if (len < 16) {
            for (; ((i + 3) | 0) < len; i = (i + 4) | 0)
                h = Math.imul(
                    rotl32((h + Math.imul(getUint32(buf, i), 0xc2b2ae3d)) | 0, 17),
                    0x27d4eb2f
                );
        } else {
            let v0 = (seed + 0x24234428) | 0;
            let v1 = (seed + 0x85ebca77) | 0;
            let v2 = seed;
            let v3 = (seed - 0x9e3779b1) | 0;

            if (len < 256) {
                for (; ((i + 15) | 0) < len; i = (i + 16) | 0) {
                    v0 = Math.imul(
                        rotl32((v0 + Math.imul(getUint32(buf, (i + 0) | 0), 0x85ebca77)) | 0, 13),
                        0x9e3779b1
                    );
                    v1 = Math.imul(
                        rotl32((v1 + Math.imul(getUint32(buf, (i + 4) | 0), 0x85ebca77)) | 0, 13),
                        0x9e3779b1
                    );
                    v2 = Math.imul(
                        rotl32((v2 + Math.imul(getUint32(buf, (i + 8) | 0), 0x85ebca77)) | 0, 13),
                        0x9e3779b1
                    );
                    v3 = Math.imul(
                        rotl32((v3 + Math.imul(getUint32(buf, (i + 12) | 0), 0x85ebca77)) | 0, 13),
                        0x9e3779b1
                    );
                }

                h =
                    (((((((rotl32(v0, 1) + rotl32(v1, 7)) | 0) + rotl32(v2, 12)) | 0) +
                        rotl32(v3, 18)) |
                        0) +
                        len) |
                    0;
                for (; ((i + 3) | 0) < len; i = (i + 4) | 0)
                    h = Math.imul(
                        rotl32((h + Math.imul(getUint32(buf, i), 0xc2b2ae3d)) | 0, 17),
                        0x27d4eb2f
                    );
            } else {
                const view = new DataView(buf.buffer);
                for (; ((i + 15) | 0) < len; i = (i + 16) | 0) {
                    v0 = Math.imul(
                        rotl32(
                            (v0 + Math.imul(view.getUint32((i + 0) | 0, true), 0x85ebca77)) | 0,
                            13
                        ),
                        0x9e3779b1
                    );
                    v1 = Math.imul(
                        rotl32(
                            (v1 + Math.imul(view.getUint32((i + 4) | 0, true), 0x85ebca77)) | 0,
                            13
                        ),
                        0x9e3779b1
                    );
                    v2 = Math.imul(
                        rotl32(
                            (v2 + Math.imul(view.getUint32((i + 8) | 0, true), 0x85ebca77)) | 0,
                            13
                        ),
                        0x9e3779b1
                    );
                    v3 = Math.imul(
                        rotl32(
                            (v3 + Math.imul(view.getUint32((i + 12) | 0, true), 0x85ebca77)) | 0,
                            13
                        ),
                        0x9e3779b1
                    );
                }

                h =
                    (((((((rotl32(v0, 1) + rotl32(v1, 7)) | 0) + rotl32(v2, 12)) | 0) +
                        rotl32(v3, 18)) |
                        0) +
                        len) |
                    0;
                for (; ((i + 3) | 0) < len; i = (i + 4) | 0)
                    h = Math.imul(
                        rotl32((h + Math.imul(view.getUint32(i, true), 0xc2b2ae3d)) | 0, 17),
                        0x27d4eb2f
                    );
            }
        }

        for (; i < len; i = (i + 1) | 0)
            h = Math.imul(rotl32((h + Math.imul(buf[i], 0x165667b1)) | 0, 11), 0x9e3779b1);
        h = Math.imul(h ^ (h >>> 15), 0x85ebca77);
        h = Math.imul(h ^ (h >>> 13), 0xc2b2ae3d);

        const c = 'go' + ((h ^ (h >>> 16)) >>> 0).toString(36);
    })
    .on('start', function (e) {
        console.log('\nStarting', e.currentTarget.name);
    })
    .on('error', (e) => console.log(e))
    .on('cycle', function (event) {
        console.log('▸', String(event.target));
    })
    .on('complete', function () {
        const fastest = this.filter('fastest').map('name')[0];
        console.log('\nFastest is: ' + fastest);
    })
    .run();

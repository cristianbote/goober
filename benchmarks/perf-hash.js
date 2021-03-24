const Benchmark = require('benchmark');

const str = `abcdefghijklmnopqrstuvwyxz ABCDEFGHIJKLMNOPQRSTUVWYXZ 0123456789`

const suite = new Benchmark.Suite("HASH!");
suite
.add('goober original HASH', () => {
    const c = 'go' + str.split('').reduce((out, s) => (101 * out + s.charCodeAt(0)) >>> 0, 11);
})
.add('goober optimized HASH', () => {
    let i = 0, l = str.length, out = 11;
    while (i < l) out = (101 * out + str.charCodeAt(i++)) >>> 0
    const c = 'go' + out;
})
.add('twind HASH', () => {
    let i = str.length - 1, out = 9;
    while (i >= 0) out = Math.imul(out ^ str.charCodeAt(i--), 0x5f356495);
    const c = 'go' + ((out ^ (out >>> 9)) >>> 0).toString(36);
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
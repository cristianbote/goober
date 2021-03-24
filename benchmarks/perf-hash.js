const Benchmark = require('benchmark');

const str = `abcdefghijklmnopqrstuvwyxz ABCDEFGHIJKLMNOPQRSTUVWYXZ 0123456789`

const suite = new Benchmark.Suite("HASH!");
suite
.add('goober original HASH', () => {
    const c = 'go' + str.split('').reduce((out, s) => (101 * out + s.charCodeAt(0)) >>> 0, 11);
})
.add('goober optimized HASH', () => {
    let i = 0, l = str.length - 1, v = 11;
    while (i < l) v = (101 * v + str.charCodeAt(i++)) >>> 0
    const c = 'go' + v;
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
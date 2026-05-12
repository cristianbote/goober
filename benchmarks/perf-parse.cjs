const Benchmark = require('benchmark');

// Parse-path benchmarks.
// Strategy:
//  1. css:hit paths (object & tagged) — cache hit, exercises hash lookup
//  2. astish + parse called directly on src/ via ESM dynamic import to
//     measure the parse hot path without cache pollution
const goober = require('../dist/goober.cjs');
goober.setup(() => null);

const hitObj = {
    color: 'red',
    padding: '8px 16px',
    fontSize: 14,
    opacity: 0.5,
    '&:hover': { color: 'peachpuff' }
};
const hitObjBig = {
    color: 'peachpuff',
    background: 'dodgerblue',
    padding: '4px 8px',
    borderRadius: 4,
    fontSize: 14,
    transition: 'all 200ms ease',
    '@media (min-width: 640px)': { fontSize: 16, padding: '8px 16px' },
    '@media (min-width: 1024px)': { fontSize: 18, padding: '12px 24px' },
    '&:hover': {
        background: 'peachpuff',
        color: 'dodgerblue',
        transform: 'translateY(-1px)'
    },
    '&.is-active,&.is-pinned': { fontWeight: 600, textDecoration: 'underline' },
    '.child': { opacity: 0.8, marginLeft: 8 }
};
goober.css(hitObj);
goober.css(hitObjBig);
goober.css`color: red; padding: 4px;`;

const taggedBig = `
    color: var(--c, peachpuff);
    background: dodgerblue;
    padding: 4px 8px;
    border: 1px solid red;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1.4;
    transition: all 200ms ease;
    transform: translateZ(0);
    will-change: transform;

    @media (min-width: 640px) {
        font-size: 16px;
        padding: 8px 16px;
    }

    &:hover {
        background: peachpuff;
        color: dodgerblue;
        transform: translateY(-1px);
    }

    &.is-active,
    &.is-pinned {
        font-weight: 600;
        text-decoration: underline;
    }

    .child:has(input, select) {
        color: red;
    }
`;
// Pre-warm: tagged big using a stable tag function so V8 reuses the array
function taggedBigCall() {
    return goober.css`${taggedBig}`;
}
taggedBigCall();

(async () => {
    // Pull internals directly from source for parse-path microbench.
    const astishMod = await import('../src/core/astish.js');
    const parseMod = await import('../src/core/parse.js');
    const toHashMod = await import('../src/core/to-hash.js');

    const { astish } = astishMod;
    const { parse } = parseMod;
    const { toHash } = toHashMod;

    const obj = {
        color: 'peachpuff',
        background: 'dodgerblue',
        padding: '4px 8px',
        borderRadius: 4,
        fontSize: 14,
        transition: 'all 200ms ease',
        '@media (min-width: 640px)': { fontSize: 16, padding: '8px 16px' },
        '@media (min-width: 1024px)': { fontSize: 18, padding: '12px 24px' },
        '&:hover': {
            background: 'peachpuff',
            color: 'dodgerblue',
            transform: 'translateY(-1px)'
        },
        '&.is-active,&.is-pinned': {
            fontWeight: 600,
            textDecoration: 'underline'
        },
        '.child': { opacity: 0.8, marginLeft: 8 }
    };
    const longStr = 'background:red;color:black;padding:4px 8px;border:1px solid blue;font-size:14px;';

    const suite = new Benchmark.Suite('PARSE!');
    suite
        .add('css:object hit', function () {
            goober.css(hitObj);
        })
        .add('css:object big hit', function () {
            goober.css(hitObjBig);
        })
        .add('css:tagged hit', function () {
            goober.css`color: red; padding: 4px;`;
        })
        .add('css:tagged big hit', function () {
            taggedBigCall();
        })
        .add('astish:big tagged', function () {
            astish(taggedBig);
        })
        .add('parse:big object', function () {
            parse(obj, '.x');
        })
        .add('toHash:long', function () {
            toHash(longStr);
        })
        .on('start', function (e) {
            console.log('\nStarting:', e.currentTarget.name);
        })
        .on('error', (e) => console.log(e))
        .on('cycle', function (event) {
            console.log('▸', String(event.target));
        })
        .on('complete', function () {
            const fastest = this.filter('fastest').map('name')[0];
            console.log('\nFastest is: ' + fastest);
        })
        .run({ async: true });
})();

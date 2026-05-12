const Benchmark = require('benchmark');

let goober;

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

(async () => {
    const ns = await import('../dist/goober.modern.js');
    goober = {
        styled: ns.styled,
        css: ns.css,
        setup: ns.setup,
        keyframes: ns.keyframes,
        glob: ns.glob,
        extractCss: ns.extractCss
    };
    goober.setup(() => null);

    goober.css(hitObj);
    goober.css(hitObjBig);
    goober.css`color: red; padding: 4px;`;
    function taggedBigCall() {
        return goober.css`${taggedBig}`;
    }
    taggedBigCall();

    const suite = new Benchmark.Suite('PARSE-modern!');
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

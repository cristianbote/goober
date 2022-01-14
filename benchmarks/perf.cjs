const Benchmark = require('benchmark');

const react = require('react');
const { renderToString: render } = require('react-dom/server');

const goober = require('../dist/goober.cjs');
goober.setup(react.createElement);

const styled = require('styled-components').default;
const styledVersion = require('styled-components/package.json').version;
const emotion = require('@emotion/styled').default;
const emotionVersion = require('@emotion/styled/package.json').version;

const inner = (props) => ({
    opacity: props.counter > 0.5 ? 1 : 0,
    '@media (min-width: 1px)': {
        rule: 'all'
    },
    '&:hover': {
        another: 1,
        display: 'space'
    }
});
const tagged = `
    opacity: ${(props) => (props.counter > 0.5 ? 1 : 0)};

    @media (min-width: 1px) {
        rule: all;
    }

    &:hover {
        another: 1;
        display: space;
    }
`;
const def = () => inner;
const arr = () => (props) => [
    {
        opacity: 0,
        '@media (min-width: 1px)': {
            rule: 'all'
        },
        '&:hover': {
            another: 1,
            display: 'space'
        }
    },
    props.counter > 0.5 && { opacity: 1 }
];

function renderComponent(Foo) {
    render(react.createElement(Foo, { counter: Math.random() }));
}

function createSuite(name, arg) {
    const suite = new Benchmark.Suite(name);
    suite
        .add('goober', () => {
            renderComponent(goober.styled('div')(arg()));
        })
        .add(`styled-components@${styledVersion}`, () => {
            renderComponent(styled.div(arg()));
        })
        .add(`emotion@${emotionVersion}`, () => {
            renderComponent(emotion.div(arg()));
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
        .run();
}

createSuite('styled:object', () => def());
createSuite('styled:tagged', () => tagged);
createSuite('styled:array', () => arr());

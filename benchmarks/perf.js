const Benchmark = require('benchmark');

const react = require('react');
const { renderToString: render } = require('react-dom/server');

const goober = require('../dist/goober');
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
const def = () => inner;

function renderComponent(Foo) {
    render(react.createElement(Foo, { counter: Math.random() }));
}

const suite = new Benchmark.Suite('styled');
suite
    .add('goober', () => {
        renderComponent(goober.styled('div')(def()));
    })
    .add(`styled-components@${styledVersion}`, () => {
        renderComponent(styled.div(def()));
    })
    .add(`emotion@${emotionVersion}`, () => {
        renderComponent(emotion.div(def()));
    })
    .on('error', (e) => console.log(e))
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        const fastest = this.filter('fastest').map('name')[0];
        console.log('\nFastest is: ' + fastest);
    })
    .run();

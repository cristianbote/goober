const Benchmark = require('benchmark');

const react = require('react');
const { renderToString: render } = require('react-dom/server');

const goober = require('../dist/goober');
goober.setPragma(react.createElement);

const styled = require('styled-components').default;
const emotion = require('@emotion/styled').default;

const def = () => props => ({
    opacity: props.counter > 0.5 ? 1 : 0,
    '@media (min-width: 1px)': {
        rule: 'all'
    },
    '&:hover': {
        another: 1,
        display: 'space'
    }
});

function renderComponent(Foo) {
    render(react.createElement(Foo, { counter: Math.random() }));
}

const suite = new Benchmark.Suite('styled');
suite
    .add('goober', () => {
        renderComponent(goober.styled('div')(def()));
    })
    .add('styled-components', () => {
        renderComponent(styled.div(def));
    })
    .add('emotion', () => {
        renderComponent(emotion.div(def));
    })
    .on('error', e => console.log(e))
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        const fastest = this.filter('fastest').map('name')[0];

        console.log('\nFastest is: ' + fastest);

        // Fail the test if goober is not the fastest
        if (fastest !== 'goober') {
            process.exit(1);
        }
    })
    .run()
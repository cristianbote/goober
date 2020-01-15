const plugin = require('../index.js');
const { transform: _transform } = require('@babel/core');

function transform(input, options = {}) {
    return _transform(input, {
        babelrc: false,
        configFile: false,
        plugins: [[plugin, options]]
    }).code;
}

describe('babel-plugin-transform-goober', () => {
    it('works for standalone expressions', () => {
        expect(transform('styled.div;')).toEqual('styled("div");');
    });
    it('works for tagged templates', () => {
        expect(transform('styled.div``;')).toEqual('styled("div")``;');
    });
    it('works for calls', () => {
        expect(transform('styled.div("hello");')).toEqual('styled("div")("hello");');
    });
    it('accepts the option "name"', () => {
        expect(transform('named.div;', { name: 'named' })).toEqual('named("div");');
    });
    it('does not rewrite styled.* if "name" is set to something else', () => {
        expect(transform('styled.div;', { name: 'named' })).toEqual('styled.div;');
    });
});

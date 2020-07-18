const plugin = require('../index.js');
const { transform: _transform } = require('@babel/core');
const { isGetAccessor } = require('typescript');

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
    it('works for custom elements', () => {
        expect(transform('styled.customElement``;')).toEqual('styled("custom-element")``;');
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
    it('requires the root to be an identifier', () => {
        expect(transform('"styled".div;')).toEqual('"styled".div;');
    });
    it('does not require the tag name to be an identifier', () => {
        expect(transform('styled["div"];')).toEqual('styled("div");');
    });
});

describe('displayName', () => {
    it('works for const declarations', () => {
        expect(transform('const Foo = styled("div")``', { dev: true })).toEqual(
            'const Foo = styled("div")``;\nFoo.displayName = "styled(Foo)";'
        );
    });
    it('works for let declarations', () => {
        expect(transform('let Foo = styled("div")``', { dev: true })).toEqual(
            'let Foo = styled("div")``;\nFoo.displayName = "styled(Foo)";'
        );
    });
    it('only works for styled expressions', () => {
        expect(transform('const Foo = foo("div")``', { dev: true })).toEqual(
            'const Foo = foo("div")``;'
        );
    });
    it('skip transform if not in dev mode', () => {
        expect(transform('const Foo = foo("div")``')).toEqual('const Foo = foo("div")``;');
    });
});

describe('annotate #__PURE__ calls', () => {
    it('prepend comment for calls', () => {
        expect(transform('const Foo = styled("div")``', { pure: true })).toEqual(
            'const Foo = /*#__PURE__*/styled("div")``;'
        );
    });
    it('prepend comment for expressions', () => {
        expect(transform('const Foo = styled.div``', { pure: true })).toEqual(
            'const Foo = /*#__PURE__*/styled("div")``;'
        );
    });
    it('prepend comment for dynamic properties', () => {
        expect(transform('const Foo = styled["div"]``', { pure: true })).toEqual(
            'const Foo = /*#__PURE__*/styled("div")``;'
        );
    });
    it('prepend comment for css calls', () => {
        expect(transform('const Foo = css``', { pure: true })).toEqual(
            'const Foo = /*#__PURE__*/css``;'
        );
    });
});

const path = require('path');
const plugin = require('../index.js');
const { transform: _transform, transformFileSync: _transformFileSync } = require('@babel/core');
const { isGetAccessor } = require('typescript');

function transform(input, options = {}) {
    return _transform(input, {
        babelrc: false,
        configFile: false,
        plugins: [[plugin, { pure: false, ...options }]]
    }).code;
}

function transformFile(fixture, options = {}) {
    const file = path.join(__dirname, '__fixtures__', fixture + '.txt');
    return _transformFileSync(file, {
        babelrc: false,
        configFile: false,
        plugins: [[plugin, { pure: false, ...options }]]
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
        expect(transform('const Foo = styled("div")``', { displayName: true })).toEqual(
            'const Foo = styled("div")``;\n' +
                'Foo.displayName = "Foo";\n' +
                'Foo.className = "Unknown__Foo-go-1";'
        );
    });
    it('works for let declarations', () => {
        expect(transform('let Foo = styled("div")``', { displayName: true })).toEqual(
            'let Foo = styled("div")``;\n' +
                'Foo.displayName = "Foo";\n' +
                'Foo.className = "Unknown__Foo-go-1";'
        );
    });
    it('only works for styled expressions', () => {
        expect(transform('const Foo = foo("div")``', { displayName: true })).toEqual(
            'const Foo = foo("div")``;'
        );
    });
    it('skip transform if not in dev mode', () => {
        expect(transform('const Foo = foo("div")``')).toEqual('const Foo = foo("div")``;');
    });
    it('converts filename into valid css class', () => {
        expect(transformFile('space name', { displayName: true })).toEqual(
            'const Foo = styled("div")``;\n' +
                'Foo.displayName = "Foo";\n' +
                'Foo.className = "space-name__Foo-go-1";'
        );
        expect(transformFile('123', { displayName: true })).toEqual(
            'const Foo = styled("div")``;\n' +
                'Foo.displayName = "Foo";\n' +
                'Foo.className = "-123__Foo-go-1";'
        );
    });
    it('appends component index to debug css class', () => {
        expect(transformFile('multiple', { displayName: true })).toEqual(
            'const Foo = styled("div")``;\n' +
                'Foo.displayName = "Foo";\n' +
                'Foo.className = "multiple__Foo-go-1";\n' +
                'const Bar = styled("div")``;\n' +
                'Bar.displayName = "Bar";\n' +
                'Bar.className = "multiple__Bar-go-2";\n' +
                'const Baz = styled("div")``;\n' +
                'Baz.displayName = "Baz";\n' +
                'Baz.className = "multiple__Baz-go-3";'
        );
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

import { parse } from '../parse';

describe('parse', () => {
    it('regular', () => {
        const out = parse(
            {
                display: 'value',
                button: {
                    border: '0'
                },
                '&.nested': {
                    foo: '1px',
                    baz: 'scale(1), translate(1)'
                }
            },
            'hush'
        );

        expect(out).toEqual(
            [
                'hush{display:value;}',
                'hush button{border:0;}',
                'hush.nested{foo:1px;baz:scale(1), translate(1);}'
            ].join('')
        );
    });

    it('camelCase', () => {
        const out = parse(
            {
                fooBarProperty: 'value',
                button: {
                    webkitPressSomeButton: '0'
                },
                '&.nested': {
                    foo: '1px',
                    backgroundEffect: 'scale(1), translate(1)'
                }
            },
            'hush'
        );

        expect(out).toEqual(
            [
                'hush{foo-bar-property:value;}',
                'hush button{webkit-press-some-button:0;}',
                'hush.nested{foo:1px;background-effect:scale(1), translate(1);}'
            ].join('')
        );
    });

    it('keyframes', () => {
        const out = parse(
            {
                '@keyframes superAnimation': {
                    '11.1%': {
                        opacity: '0.9999'
                    },
                    '111%': {
                        opacity: '1'
                    }
                },
                '@keyframes foo': {
                    to: {
                        baz: '1px',
                        foo: '1px'
                    }
                }
            },
            'hush'
        );

        expect(out).toEqual(
            [
                '@keyframes superAnimation{11.1%{opacity:0.9999;}111%{opacity:1;}}',
                '@keyframes foo{to{baz:1px;foo:1px;}}'
            ].join('')
        );
    });

    it('font-face', () => {
        const out = parse(
            {
                '@font-face': {
                    'font-weight': 100
                }
            },
            'FONTFACE'
        );

        expect(out).toEqual(['@font-face{font-weight:100;}'].join(''));
    });

    it('@media', () => {
        const out = parse(
            {
                '@media any all (no-really-anything)': {
                    position: 'super-absolute'
                }
            },
            'hush'
        );

        expect(out).toEqual(
            ['@media any all (no-really-anything){hush{position:super-absolute;}}'].join('')
        );
    });

    it('@import', () => {
        const out = parse(
            {
                '@import': "url('https://domain.com/path?1=s')"
            },
            'hush'
        );

        expect(out).toEqual(["@import url('https://domain.com/path?1=s');"].join(''));
    });

    it('cra', () => {
        expect(
            parse(
                {
                    '@import': "url('path/to')",
                    '@font-face': {
                        'font-weight': 100
                    },
                    'text-align': 'center',
                    '.logo': {
                        animation: 'App-logo-spin infinite 20s linear',
                        height: '40vmin',
                        'pointer-events': 'none'
                    },
                    '.header': {
                        'background-color': '#282c34',
                        'min-height': '100vh',
                        display: 'flex',
                        'flex-direction': 'column',
                        'align-items': 'center',
                        'justify-content': 'center',
                        'font-size': 'calc(10px + 2vmin)',
                        color: 'white'
                    },
                    '.link': {
                        color: '#61dafb'
                    },
                    '@keyframes App-logo-spin': {
                        from: {
                            transform: 'rotate(0deg)'
                        },
                        to: {
                            transform: 'rotate(360deg)'
                        }
                    }
                },
                'App'
            )
        ).toEqual(
            [
                "@import url('path/to');",
                'App{text-align:center;}',
                '@font-face{font-weight:100;}',
                'App .logo{animation:App-logo-spin infinite 20s linear;height:40vmin;pointer-events:none;}',
                'App .header{background-color:#282c34;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin);color:white;}',
                'App .link{color:#61dafb;}',
                '@keyframes App-logo-spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}'
            ].join('')
        );
    });

    // Not... supported
    it('@supports', () => {
        expect(
            parse(
                {
                    '@supports (some: 1px)': {
                        '@media (s: 1)': {
                            display: 'flex'
                        }
                    }
                },
                'hush'
            )
        ).toEqual(['@supports (some: 1px){@media (s: 1){hush{display:flex;}}}'].join(''));
    });

    it('nested with multiple selector', () => {
        const out = parse(
            {
                display: 'value',
                '&:hover,&:focus': {
                    border: '0',
                    span: {
                        index: 'unset'
                    }
                }
            },
            'hush'
        );
        expect(out).toEqual(
            [
                'hush{display:value;}',
                'hush:hover,hush:focus{border:0;}',
                'hush:hover span,hush:focus span{index:unset;}'
            ].join('')
        );
    });
});

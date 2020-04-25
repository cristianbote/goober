import { astish } from '../astish';

describe('astish', () => {
    it('regular', () => {
        expect(
            astish(`
            prop: value;
        `)
        ).toEqual({
            prop: 'value'
        });
    });

    it('nested', () => {
        expect(
            astish(`
            prop: value;
            @keyframes foo {
                0% {
                    attr: value;
                }
                50% {
                    opacity: 1;
                }
                100% {
                    foo: baz;
                }
            }
            named {
                background-image: url('/path-to-jpg.png');
            }
            opacity: 0;
            .class,
            &:hover {
                -webkit-touch: none;
            }
        `)
        ).toEqual({
            prop: 'value',
            opacity: '0',
            '.class,&:hover': {
                '-webkit-touch': 'none'
            },
            '@keyframes foo': {
                '0%': {
                    attr: 'value'
                },
                '50%': {
                    opacity: '1'
                },

                '100%': {
                    foo: 'baz'
                }
            },
            named: {
                'background-image': "url('/path-to-jpg.png')"
            }
        });
    });

    it('merging', () => {
        expect(
            astish(`
            .c {
                font-size:24px;
            }
        
            .c {
                color:red;
            }
        `)
        ).toEqual({
            '.c': {
                'font-size': '24px',
                color: 'red'
            }
        });
    });

    it('regression', () => {
        expect(
            astish(`
            &.g0ssss {
                aa: foo;
                box-shadow: 0 1px rgba(0, 2, 33, 4) inset;
            }
            named {
                transform: scale(1.2), rotate(1, 1);
            }
            @media screen and (some-rule: 100px) {
                foo: baz;
                opacity: 1;
                level {
                    one: 1;
                    level {
                        two: 2;
                    }
                }
            }
            .a{
                color: red;
            }
            .b  {
                color: blue;
            }
        `)
        ).toEqual({
            '&.g0ssss': {
                aa: 'foo',
                'box-shadow': '0 1px rgba(0, 2, 33, 4) inset'
            },
            '.a': {
                color: 'red'
            },
            '.b': {
                color: 'blue'
            },
            named: {
                transform: 'scale(1.2), rotate(1, 1)'
            },
            '@media screen and (some-rule: 100px)': {
                foo: 'baz',
                opacity: '1',
                level: {
                    one: '1',

                    level: {
                        two: '2'
                    }
                }
            }
        });
    });
});

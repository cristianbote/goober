import { astish } from '../astish';
import { parse } from '../parse';

describe('parser', () => {
    it('at-rules', () => {
        const input = `
        @-ms-viewport {
          width:device-width;
        }
        @viewport {
          width:device-width;
        }
        @page & {
          invalid:true;
        }
        @page {
          size:A4 landscape;
        }
        @document url(://www.w3.org/),url-prefix(//www.w3.org/),domain(mozilla.org),regexp("https:.*") {
          body {
            color: red;
          }
        }

        @keyframes mod {
          from {
            opacity: 100px;
          }
        }

        @viewport {
          min-width:640px;
          max-width:800px;
        }
        @counter-style list {
          system:fixed;
          symbols:url();
          suffix:" ";
        }
        @-moz-document url-prefix() {
          .selector {
            color:lime;
          }
        }
        @page {
          color:red;
          @bottom-right {
            content: counter(pages);
            margin-right: 1cm;
          }
          width: none;
        }
      `;

        const res = parse(astish(input), '');
        console.log('at-rules\n', res.trim());
    });

    it.only('parser', () => {
        console.log(
            parse(
                astish(`
        parent-1,
        parent-2 {
          color:red;

          &:active,
          &:hover,
          span {
            color:black;
          }
        }
        `),
                '.goober'
            )
        );
    });

    it('unviversal', () => {
        const res = parse(
            astish(`
            * {
                color:red;
            }
            svg {
                &, & * {
                fill: currentColor;
                }
            }
            * * {color:hotpink;}
        `),
            '.goober'
        );

        console.log('universal\n', res);
    });

    it('& in string', () => {
        const res = parse(
            astish(`
            & [href="https://css-tricks.com?a=1&b=2"] {
                color:red;
            }
        `),
            '.goober'
        );

        console.log('& in string\n', res);
    });

    it('&', () => {
        const res = parse(
            astish(`
            & {
                color:blue;
            }
            &&& {
                color:red;
            }
            & + & {
                color:red;
            }
            .wrapper button& {
                color:red;
            }
            &:hover & {
                color: green;
            }
            div:hover & {
                color: green;
            }
            div:hover & {
                h1 & {
                    color:red;
                }
            }
        `),
            '.goober'
        );

        console.log('&\n', res);
    });

    it('quotes', () => {
        const res = parse(
            astish(`
            .foo:before {
                content:".hello {world}";
                content:".hello {world} ' ";
                content:'.hello {world} " ';
            }
        `),
            '.goober'
        );

        console.log('quotes\n', res);
    });

    it('matches', () => {
        const res = parse(
            astish(`
            h1:matches(.a,.b,:not(.c)) {
                display: none
            }
        `),
            '.goober'
        );

        console.log('matches\n', res);
    });

    it('spaces', () => {
        const res = parse(
            astish(`
            .a{
                color: red;
            }

            .b  {
                color: blue;
            }
        `),
            ''
        );

        console.log('spaces\n', res);
    });

    it('@keyframes', () => {
        const res = parse(
            astish(`
            @-webkit-keyframes slidein {
				to { transform:translate(20px); }
			}
            @keyframes slidein {
                        to { transform:translate(20px); }
            }
            @keyframes hahaha {
                    0%,
                    1%{t:0}
            }
            @keyframes infinite-spinning {
                from {
                transform: rotate(0deg);
                }
                to {
                transform: rotate(360deg);
                }
            }
        `),
            '.goober'
        );

        console.log('@keyframes\n', res);
    });

    it('nested', () => {
        const res = parse(
            astish(`
            div {
                h2 {
                  color:red;
                  h3 {
                    color:blue;
                  }
                }
              }
              .foo & {
                  width:1px;
                  &:hover {
                    color:black;
                  }
                  li {
                    color:white;
                  }
              }
              h1, div {
                color:red;
                h2,
                &:before {
                  color:red;
                }
                color:blue;
                header {
                  font-size:12px;
                }
                @media {
                  color:red;
                }
                @media {
                  color:blue;
                }
              }
              &.foo {
                &.bar {
                  color:orange
                }
              }
              &.foo {
                &.bar {
                  &.barbar {
                    color:orange
                  }
                }
              }
        `),
            '.goober'
        );

        console.log('nested\n', res);
    });
});

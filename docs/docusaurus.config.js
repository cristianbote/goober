module.exports = {
    title: 'goober',
    tagline: 'a less than 1KB 🎉 css-in-js alternative with a familiar API',
    url: 'https://goober.js.org',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'cristianbote',
    projectName: 'goober',
    themeConfig: {
        colorMode: {
            disableSwitch: false,
            respectPrefersColorScheme: true,
            switchConfig: {
                darkIcon: '🌙',
                darkIconStyle: {
                    marginLeft: '2px'
                },
                lightIcon: '☀️',
                lightIconStyle: {
                    marginLeft: '1px'
                }
            }
        },
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/dracula')
        },
        navbar: {
            logo: {
                alt: 'goober',
                src: 'img/logo.png'
            },
            items: [
                {
                    href: 'https://github.com/cristianbote/goober',
                    label: 'GitHub',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} goober. Built with Docusaurus.`
        }
        // algolia: {
        //   apiKey: "apiKey",
        //   indexName: "goober",
        // },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/cristianbote/goober/edit/master/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ]
};

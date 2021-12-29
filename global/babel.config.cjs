module.exports = {
    plugins: [
        [
            '@babel/plugin-transform-react-jsx',
            {
                pragma: 'h'
            }
        ]
    ],
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ]
    ]
};

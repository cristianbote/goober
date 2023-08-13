/* eslint-env node */
module.exports = {
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname
    },
    root: true,
    rules: {
        '@typescript-eslint/prefer-optional-chain': [
            'error',
            {
                allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: true
            }
        ]
    }
};

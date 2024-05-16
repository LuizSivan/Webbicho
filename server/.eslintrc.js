module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 2,
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-trailing-spaces': ['error', {skipBlankLines: true}],
        'newline-per-chained-call': ['error'],
        'no-multi-spaces': ['error', {ignoreEOLComments: true}],
        'brace-style': ['error', '1tbs', {allowSingleLine: true}],
        indent: ['error', 2, {
            SwitchCase: 2,
            MemberExpression: 2,
            ArrayExpression: 1,
            ObjectExpression: 1,
            flatTernaryExpressions: false,
            FunctionDeclaration: {
                parameters: 2,
                body: 1,
            },
            FunctionExpression: {
                parameters: 2,
                body: 1,
            },
            CallExpression: {
                arguments: 2,
            },
        }],
        quotes: ['error', 'single', {avoidEscape: true}],
        'prettier/prettier': [
            'off',
            {
                useTabs: false,
                singleQuote: true,
                trailingComma: 'all',
                printWidth: 120,
                arrowParens: 'avoid',
                bracketSpacing: false,
                bracketSameLine: true,
                semi: true,
            },
        ],
    },
};
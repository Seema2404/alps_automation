module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    env: {
        'cypress/globals': true,
        'es6': true,
        'node': true
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    globals: {
        cy: true
    },
    plugins: [
        '@typescript-eslint',
        'chai-friendly',
        'cypress',
        'filenames',
        'import'
    ],
    extends: [
        'eslint:all',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:chai-friendly/recommended',
        'plugin:cypress/recommended',
        'plugin:import/errors',
        'plugin:import/warnings'
    ],
    rules: {
        // http://eslint.org/docs/rules/
        'array-bracket-newline': ['error', 'consistent'],
        'array-bracket-spacing': ['error', 'never'],
        'array-element-newline': 'off',
        'arrow-body-style': 'off',
        'arrow-parens': 'off',
        'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
        'callback-return': ['error', ['callback', 'cb', 'done']],
        'class-methods-use-this': 'off',
        'consistent-return': 'off',
        'capitalized-comments': 'off',
        'dot-location': ['error', 'property'],
        'eol-last': ['error', 'always'],
        'func-names': ['off'],
        'function-call-argument-newline': 'off',
        'global-require': 'off',
        'id-length': 'off',
        'indent': ['error', 4, { SwitchCase: 1 }],
        'init-declarations': 'off',
        'line-comment-position': 'off',
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'max-len': 'off',
        'max-lines': ['error', 1000],
        'max-lines-per-function': 'off',
        'max-params': ['error', { max: 6 }],
        'max-statements': 'off',
        'multiline-comment-style': 'off',
        'multiline-ternary': ['error', 'always-multiline'],
        'newline-after-var': ['error', 'always'],
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
        'new-cap': 'error',
        'no-await-in-loop': 'off',
        'no-console': 'off',
        'no-extra-parens': ['error', 'all', { returnAssign: false, nestedBinaryExpressions: false }],
        'no-inline-comments': 'off',
        'no-invalid-this': 'off',
        'no-magic-numbers': 'off',
        'no-multi-spaces': ['error', { ignoreEOLComments: true }],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-process-env': 'off',
        'no-prototype-builtins': 'error',
        'no-template-curly-in-string': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': 'error',
        'no-undefined': 'off',
        'no-unused-vars': ['error', { ignoreRestSiblings: true }],
        'no-warning-comments': 'off',
        'object-curly-newline': ['error', {
            ObjectExpression: { multiline: true, consistent: true },
            ObjectPattern: { multiline: true, consistent: true },
            ImportDeclaration: 'never',
            ExportDeclaration: { multiline: true, consistent: true, minProperties: 2 }
        }],
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': 'off',
        'one-var': ['error', { uninitialized: 'always', initialized: 'never' }],
        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            { blankLine: 'always', prev: '*', next: 'return' }
        ],
        'prefer-arrow-callback': 'off',
        'prefer-destructuring': 'off',
        'prefer-named-capture-group': 'off',
        'require-unicode-regexp': 'off',
        'require-atomic-updates': 'off',
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': ['error', 'single', { avoidEscape: true }],
        'require-jsdoc': 'off',
        'semi': ['error', 'never'],
        'sort-imports': 'off',
        'sort-keys': 'off',
        'strict': 'off',

        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
        '@typescript-eslint/explicit-function-return-type': ['error', {
            allowExpressions: true,
            allowTypedFunctionExpressions: true
        }],
        '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
        '@typescript-eslint/no-extra-parens': ['error', 'all', {
            returnAssign: false,
            nestedBinaryExpressions: false
        }],

        // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
        'import/default': 'error',
        'import/export': 'error',
        'import/exports-last': 'error',
        'import/extensions': ['error', 'never', { json: 'always', ts: 'always' }],
        'import/first': 'error',
        'import/max-dependencies': ['error', { max: 20 }],
        'import/named': 'error',
        'import/namespace': ['error', { allowComputed: true }],
        'import/newline-after-import': 'error',
        'import/no-absolute-path': 'error',
        'import/no-amd': 'error',
        'import/no-anonymous-default-export': 'off',
        'import/no-commonjs': 'off',
        'import/no-cycle': 'error',
        'import/no-default-export': 'off',
        'import/no-duplicates': 'error',
        'import/no-dynamic-require': 'off',
        'import/no-internal-modules': 'off',
        'import/no-mutable-exports': 'error',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'error',
        'import/no-named-default': 'error',
        'import/no-namespace': 'off',
        'import/no-nodejs-modules': 'off',
        'import/no-self-import': 'error',
        'import/no-unassigned-import': 'error',
        'import/no-unresolved': 'off',
        'import/no-webpack-loader-syntax': 'error',
        'import/order': ['error', {
            'groups': [['builtin', 'external'], ['internal', 'parent'], ['sibling', 'index']],
            'newlines-between': 'always'
        }],
        'import/prefer-default-export': 'off',
        'import/unambiguous': 'off',

        // https://github.com/selaux/eslint-plugin-filenames#rules
        'filenames/match-exported': ['error', 'kebab'],
        'filenames/no-index': 'off'
    },
    overrides: [
        {
            files: ['.*.js'],
            rules: {
                'filenames/match-regex': 'off'
            }
        },
        {
            files: ['cypress/integration/**/*.spec.ts'],
            rules: {
                'no-unused-expressions': 'off',
                'filenames/match-regex': ['error', '^[a-z0-9-]+[.]spec?$', true]
            }
        },
        {
            files: ['cypress/support/commands/**/*.ts'],
            rules: {
                '@typescript-eslint/no-namespace': 'off'
            }
        }
    ]
}

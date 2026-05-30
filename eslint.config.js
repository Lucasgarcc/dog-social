import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
    {
        // Ignorar pastas
        ignores: ['dist'],
    },
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
            },
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            // Regras base do JS e React
            ...js.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,

            // Suas customizações
            'indent': ['error', 4],
            'no-unused-vars': 'off', // Desativa o aviso de variáveis não usadas
            'react-refresh/only-export-components': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
]

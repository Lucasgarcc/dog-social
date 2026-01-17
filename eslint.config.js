import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'

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
            'react': react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            // Regras base do JS e React
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,

            // Suas customizações
            'indent': ['error', 4],
            'no-unused-vars': 'off', // Desativa o aviso de variáveis não usadas
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'react-refresh/only-export-components': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
]
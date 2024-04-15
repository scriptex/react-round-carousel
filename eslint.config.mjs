import globals from 'globals';

import react from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import tsEsLint from '@typescript-eslint/eslint-plugin';
import tsEsLintParser from '@typescript-eslint/parser';

export default [
	{
		files: [
			'src/**/*.{ts,tsx}',
			'demo/**/*.{ts,tsx}',
			'__tests__/**/*.{ts,tsx}'
		],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			},
			parser: tsEsLintParser,
			parserOptions: {
				project: 'tsconfig-lint.json',
				sourceType: 'module'
			}
		},
		plugins: {
			react,
			prettier,
			reactHooks,
			tsEsLint
		},
		ignores: ['postcss.config.js'],
		rules: {
			'no-console': 'error'
		},
		settings: {
			react: {
				version: 'detect'
			}
		}
	}
];

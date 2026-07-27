/**
 * @type {import('jest').Config}
 */
export default {
	moduleDirectories: [
		'<rootDir>/node_modules/',
		'<rootDir>/src',
		'<rootDir>/__tests__'
	],
	moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
	rootDir: '.',
	testEnvironment: 'jsdom',
	transform: {
		'\\.[tj]sx?$': [
			'ts-jest',
			{
				tsconfig: '<rootDir>/tsconfig-test.json',
				allowJs: true,
				useESM: true
			}
		]
	}
};

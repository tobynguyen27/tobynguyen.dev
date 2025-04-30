/** @type {import('prettier').Config} */
const config = {
	tabWidth: 4,
	useTabs: true,
	endOfLine: "lf",
	trailingComma: "all",
	arrowParens: "avoid",
	bracketSpacing: true,
	htmlWhitespaceSensitivity: "css",
	insertPragma: false,
	bracketSameLine: true,
	jsxSingleQuote: true,
	proseWrap: "always",
	requirePragma: false,
	semi: false,
	overrides: [
		{
			files: ["package.json"],
			options: {
				useTabs: false,
			},
		},
	],
}

export default config

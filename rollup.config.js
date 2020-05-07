const typescript = require("rollup-plugin-typescript2")

module.exports = [
	{
		input: "src/index.ts",
		output: [
			{
				file: "dist/index.js",
				format: "umd",
				name: "Almanac"
			},
			{
				file: "dist/index.esm.js",
				format: "esm"
			}
		],
		plugins: [
			typescript({
				tsconfig: 'tsconfig.json'
			}),
		]
	},
	{
		input: "src/programmerEvents.ts",
		output: {
			file: "dist/programmer-events.js",
			format: "umd",
			name: "ProgrammerEvents"
		}
	}
];

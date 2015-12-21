module.exports = {
    verbose: true,
    testTimeout: 5 * 60 * 1000,
    plugins: {
        sauce: {
            disabled: true,
            browsers: [
							{
			          browserName: "chrome",
			          platform: "OS X 10.9",
			          version: "40"
			        },
							{
			          browserName: "internet explorer",
			          platform: "Windows 8.1",
			          version: "11.0"
			        },
							{
			          browserName: "safari",
			          platform: "OS X 10.10",
			          version: "8.0"
			        },
							{
			          browserName: "firefox",
			          platform: "Windows 7",
			          version: "27.0"
			        }
            ]
        }
    }
};

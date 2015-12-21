module.exports = {
    verbose: true,
    testTimeout: 5 * 60 * 1000,
    plugins: {
        sauce: {
            disabled: true,
            browsers: [
							{
			          browserName: "chrome",
			          platform: "Windows 8.1",
			          version: "47"
			        }
            ]
        }
    }
};

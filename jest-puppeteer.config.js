module.exports = {
	/**
	 * Puppeteer launch options
	 * https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions
	 */
	launch: {
		headless: true,
		devtools: false
	},

	
	/**
	 * Puppeteer connect options
	 * https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerconnectoptions
	 */
	connect: null,


	/**
	 * jest-dev-server options
	 * https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server
	 */
	server: {
		command: 'npm start',
		port: 3000,
		usedPortAction: 'kill',
		launchTimeout: 10000,
	},
}
const timeout = 5000;

describe('百度访问测试', () => {
	beforeAll(async () => {
		await page.goto('https://baidu.com')
	})

	it('页面包含 baidu 关键字', async () => {
		// debugger
		// await jestPuppeteer.debug()
		await expect(page).toMatch('baidu')
	})
}, timeout)

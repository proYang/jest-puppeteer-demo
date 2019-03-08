const timeout = 5000;

describe('Koa server 访问测试', () => {
	beforeAll(async () => {
		await page.goto('http://localhost:3000')
	})

	it('页面包含 Hello Koa 关键字', async () => {
		await expect(page).toMatch('Hello Koa')
	})
}, timeout)

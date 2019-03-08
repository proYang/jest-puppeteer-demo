const timeout = 5000;
const assert = require('assert');

describe('Assert console', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000')
  })

	it('页面包含 Hello Koa 关键字', async () => {
		assert((await page.content()).includes("Hello Koa"))
  })
  
}, timeout)

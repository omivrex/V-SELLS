const puppeteer = require('puppeteer');

puppeteer

const bot = async (url:string, action:any) => {
    const browser = await puppeteer.launch({headless: false, slowMo: 2000, });
    const page = await browser.newPage()
    await page.goto(url, {waitUntil: 'networkidle2'})
    await page.click('div.ProductGrid__FeedTileWidthWrapper-sc-1wctxcd-2')
    await action()
}

export default bot
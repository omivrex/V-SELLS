const puppeteer = require('puppeteer');

const bot = async (url:string, action:any) => {
    const browser = await puppeteer.launch({headless: false, slowMo: 2000, });
    const page = await browser.newPage()
    await page.goto(url, {waitUntil: 'networkidle2'})
    await page.click('a.item-tile')
    await action()
}

export default bot
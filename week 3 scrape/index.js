const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: "life.png"});
    
    const [el] = await page.$x('//*[@id="mw-content-text"]/div[1]/div[2]/div/a/img');
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();

    const [el2] = await page.$x('//*[@id="mw-content-text"]/div[1]/p[2]');
    const txt = await el2.getProperty('textContent');
    const rawTxt = await txt.jsonValue();

    const [el3] = await page.$x('//*[@id="firstHeading"]/span');
    const txt2 = await el3.getProperty('textContent');
    const head = await txt2.jsonValue();


    console.log({srcTxt, rawTxt, head});

    browser.close();
}

scrapeProduct('https://simple.wikipedia.org/wiki/Life')
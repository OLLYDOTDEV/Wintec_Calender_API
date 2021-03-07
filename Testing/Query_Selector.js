const puppeteer = require('puppeteer')


const options = {
    headless: false,
    defaultViewport: null,
    args: ['--window-size=1920,1080'],
    
  };

(async () => {
    const browser = await puppeteer.launch(options)
    const page = await browser.newPage()

    await page.goto('https://example.com/')

    console.log("\ntest1\n");

    let scrap = await page.evaluate(() => {
        return document.querySelector('h1'); // eg h1.class // html tag . css class
    });







    browser.close()
    console.log('Completed Successfully')
   })()
    

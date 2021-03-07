// based off https://oxylabs.io/blog/puppeteer-tutorial

const puppeteer = require('puppeteer')


const options = {
    headless: false,
    defaultViewport: null,
    args: ['--window-size=1920,1080'],
    
  };

(async () => {
    const browser = await puppeteer.launch(options)
    const page = await browser.newPage()

    await page.goto('https://en.wikipedia.org/wiki/Web_scraping')

    console.log("\ntest1\n");

     Scrap = await page.evaluate(() => {
        Scrap_Elements = document.querySelectorAll("h2 .mw-headline")
        Scrap_Array = Array.from(Scrap_Elements);
        return Scrap_Array.map(Scrapings => Scrapings.textContent);
    });





    console.log(Scrap)




  browser.close()
    console.log('Completed Successfully')
   })()
    

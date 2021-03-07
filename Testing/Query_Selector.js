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

     scrap = await page.evaluate(() => {
        return document.querySelector("h2").textContent
    });


    console.log(scrap)




    //  browser.close()
    console.log('Completed Successfully')
   })()
    

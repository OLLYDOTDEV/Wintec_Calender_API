const puppeteer = require('puppeteer');


const options = {
    headless: false,
    defaultViewport: null,
    args: ['--window-size=1920,1080'],
  };


(async () => {
    const browser = await puppeteer.launch(options)
    const page = await browser.newPage()
    await page.goto('https://timetable.wintec.ac.nz/student/2021/')
    await page.click('#LinkBtn_student_sets') // click button
    await page.screenshot({ path: 'screenshots/click.png' });
    browser.close()
    console.log('See screenshot')
   })()

   
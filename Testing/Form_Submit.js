const puppeteer = require('puppeteer')


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
    // ^^ from Change_Page_Via_Button.js
    // https://blog.antoine-augusti.fr/2019/08/submit-form-puppeteer/
    //https://chercher.tech/puppeteer/select-dropdown-puppeteer

    await page.waitForSelector("#tWildcard"); // needed to allow time for tWildcard to load
    //await page.type('#tWildcard','CEID') used to configure : Refine your search by typing any part of the student set name
    const searchForm = await page.$('#form1');
    await searchForm.evaluate(searchForm => searchForm.submit()); // submits tWildcard filter
    await page.screenshot({ path: 'screenshots/form_submit.png' });
 browser.close()
    console.log('See screenshot')
   })()
  
   
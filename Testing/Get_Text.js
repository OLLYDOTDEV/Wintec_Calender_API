//https://tutorial.tips/how-to-get-the-text-of-element-using-puppeteer/
const puppeteer = require('puppeteer')
const options = {
  headless: false,
  defaultViewport: null,
  args: ['--window-size=1920,1080'],
}
;(async () => {
  const browser = await puppeteer.launch(options)
  const page = await browser.newPage()
  await page.setDefaultNavigationTimeout(0)
  await page.goto('https://timetable.wintec.ac.nz/student/2021/')

  const heading1 = await page.$eval('#tFilterTitle', el => el.textContent);
  console.log(heading1)
  
  
  await browser.close()
})()



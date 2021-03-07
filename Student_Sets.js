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

   // await page.waitForSelector("#tWildcard"); // needed to allow time for tWildcard to load
    //await page.type('#tWildcard','CEID') used to configure : Refine your search by typing any part of the student set name
   // const searchForm1 = await page.$('#form1');
   // await searchForm1.evaluate(searchForm1 => searchForm1.submit()); // submits tWildcard filter
   
   
   
    await page.waitForSelector("#tWildcard");  // loads page and student sets
    await page.select('#dlObject', '#SPLUSA72251')
    await page.waitForSelector("#bGetTimetable");
   await page.click('#bGetTimetable') 
   
   await page.goto('https://timetable.wintec.ac.nz/student/2021/Reports/Calendar.aspx')

   await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] }); // lets page load fully 
 
  
// use https://www.w3schools.com/jsref/met_document_queryselectorall.asp

   await page.screenshot({ path: 'screenshots/Student_Sets.png' });

   console.log("\ntest1\n");

 
    
   let scrap = await page.evaluate(() => {
    return document.querySelector('calendar-cell-content');
});

// https://oxylabs.io/blog/puppeteer-tutorial
// read this

let nodeList = Array.from(scrap);
  console.log("\ntest3\n");
  console.log( nodeList);

 




//  browser.close()
    console.log('Completed Successfully')
   })()
  
   

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 


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

    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] }); // lets page load fully 
    await page.click('#LinkBtn_student_sets') // click button
    // ^^ from Change_Page_Via_Button.js
    // https://blog.antoine-augusti.fr/2019/08/submit-form-puppeteer/
    //https://chercher.tech/puppeteer/select-dropdown-puppeteer

   // await page.waitForSelector("#tWildcard"); // needed to allow time for tWildcard to load
    //await page.type('#tWildcard','CEID') used to configure : Refine your search by typing any part of the student set name
   // const searchForm1 = await page.$('#form1');
   // await searchForm1.evaluate(searchForm1 => searchForm1.submit()); // submits tWildcard filter
   await page.waitForSelector("#dlObject")
   Student_Set_List = await page.evaluate(() => { // exec JS within chrome rather then CLI
    var Student_Set_List_Array = []

    Set_list_Length = Student_Set_List_Elements = Array.from(document.querySelectorAll("select#dlObject.DepartmentFilter"))[0].length
    for (let index = 0; index < Set_list_Length; index++) {
      var SetName = Array.from(document.querySelectorAll("select#dlObject.DepartmentFilter"))[0][index].textContent // gets StudentSet Name
      var SetValue = Array.from(document.querySelectorAll("select#dlObject.DepartmentFilter"))[0][index].value // gets StudentSet Value
      Student_Set_List_Array.push(SetName + " | "+SetValue )
    }
    return Student_Set_List_Array

  });
   
  console.log(Student_Set_List);











  

    await page.waitForSelector("#dlObject")
    await page.select('#dlObject', '#SPLUSA72251') // Select the specified student set

    await page.waitForSelector("#dlObject")
    await page.select('#dlObject', '#SPLUSA72251')


    await sleep(100)
    await page.waitForSelector("#dlType")
   Report_Type = await page.evaluate(() => {
    document.getElementById('dlType').value="student_set_list;cyon_reports_list_url;dummy" // A work around method for changing dlType values via overriding the DOM 
    bGetTimetable.click()
 });

  
  

    await page.waitForSelector("#bGetTimetable")
   await page.click('#bGetTimetable') 
   console.log("\nbefore\n");
   await page.goto('https://timetable.wintec.ac.nz/student/2021/Reports/List.aspx')


  
// use https://www.w3schools.com/jsref/met_document_queryselectorall.asp
await sleep(2000)
   await page.screenshot({ path: 'screenshots/Student_Sets.png' });
 

    Events_List = await page.evaluate(() => {
    
      Scrap_Elements = document.querySelectorAll("tr.odd")
      Scrap_Array = Array.from(Scrap_Elements)
      return Scrap_Array.map(Scrapings => Scrapings.textContent)
  });
    console.log(Events_List);



  // https://oxylabs.io/blog/puppeteer-tutorial
// read this
//  browser.close()
    console.log('Completed Successfully')
   })()
  
   
const puppeteer = require('puppeteer');

const steps = [];

const input = {
  selector: 'input[name=q]',
  action: 'type',
  value: 'Funciona!!!!!'
}

const finisher = {
  selector: 'input[type="submit"]',
  action: 'click'
}

const step1 = {
  site: 'https://google.com',
  inputs: [input],
  finisher: finisher
}

const executeSite = step => {
  await page.goto(step.site, {waitUntil: 'networkidle2'});
  for (let i = 0; i < site.inputs.length; i ++) {
    await page.waitFor(site.inputs[i]);
  }
  await page.waitFor('input[name=q]');
}

exports.executeSteps = () => {
  const browser = await puppeteer.launch();
}



exports.searchGoogle = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com', {waitUntil: 'networkidle2'});

  await page.waitFor('input[name=q]');
  // Type our query into the search bar
  await page.type('input[name=q]', 'puppeteer');
  await page.click('input[type="submit"]');

  // Wait for the results to show up
  await page.waitForSelector('h3 a');

  // Extract the results from the page
  // const links = await page.evaluate(() => {
  //   const anchors = Array.from(document.querySelectorAll('h3 a'));
  //   return anchors.map(anchor => anchor.textContent);
  // });
  // console.log(links.join('\n'));
  await page.screenshot({path: 'example.png'});
  await browser.close();
}
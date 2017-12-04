const puppeteer = require('puppeteer');

const input1 = {
  selector: 'input[name=q]',
  action: 'type',
  value: 'cualquiera'
}
const input2 = {
  selector: 'input[name=q]',
  action: 'type',
  value: 'este es el segundo'
}
const input3 = {
  selector: 'input[name=q]',
  action: 'type',
  value: 'aca viene el tercero'
}

const finisher = {
  selector: 'input[type="submit"][name="btnK"]',
  action: 'click'
}

const step1 = {
  site: 'https://google.com',
  inputs: [input1],
  finisher: finisher
}
const step2 = {
  site: 'https://google.com',
  inputs: [input2],
  finisher: finisher
}
const step3 = {
  site: 'https://google.com',
  inputs: [input3],
  finisher: finisher
}

const steps = [step1, step2, step3];

const executeSite = async (browser, step, index) => {
  const page = await browser.newPage();
  await page.goto(step.site, {waitUntil: 'networkidle2'});
  for (let i = 0; i < step.inputs.length; i ++) {
    const input = step.inputs[i];
    await page.waitFor(input.selector);
    await page[input.action](input.selector, input.value);
  }
  await page.waitFor(step.finisher.selector);
  await page[step.finisher.action](step.finisher.selector);

  await page.waitForSelector('h3 a');
  await page.screenshot({ path: `example${index}.png` })
}

exports.executeSteps = async () => {
  const browser = await puppeteer.launch();
  for (let i = 0; i < steps.length; i++) {
    await executeSite(browser, steps[i], i);
  }
  await browser.close();
}

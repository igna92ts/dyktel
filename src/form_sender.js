const puppeteer = require('puppeteer'),
  stepsConfig = require('../steps.config');

const batchSize = 10;
let progress = 0;

const executeSite = async (page, step) => {
  if (step.site) {
    await page.goto(step.site, {waitUntil: 'networkidle2'});
  }
  for (let i = 0; i < step.inputs.length; i ++) {
    const input = step.inputs[i];
    await page.waitForSelector(input.selector);
    if (input.value) {
      await page[input.action](input.selector, input.value);
    } else {
      await page[input.action](input.selector);
    }
    if (input.delay) {
      await page.waitFor(input.delay);
    }
  }
  // await page.screenshot({ path: `example${index}.png` })
  await page.waitFor(step.finisher.selector);
  await page[step.finisher.action](step.finisher.selector);
  await page.waitFor(step.finisher.waitFor);
}

const executeBatch = async (browser, data) => {
  const dataHead = data.slice(0, batchSize);
  const dataRest = data.slice(batchSize);
  let promises = dataHead.map(async csvRow => {
    const steps = stepsConfig(csvRow).steps;
    const page = await browser.newPage();
    for (let i = 0; i < steps.length; i++) {
      await executeSite(page, steps[i]);
    }
    await page.close();
  });
  if (dataRest.length > 0) {
    const recur = await executeBatch(browser, dataRest)
    promises = promises.concat(recur);
  }
  return promises;
}

exports.executeSteps = async data => {
  const browser = await puppeteer.launch({headless: true});
  progress = 0;
  const result = await executeBatch(browser, data);
  await Promise.all(result);
  console.log('DONE');
  await browser.close();
}
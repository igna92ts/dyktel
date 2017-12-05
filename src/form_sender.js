const puppeteer = require('puppeteer'),
  config = require('../steps.config');

const executeSite = async (page, step, index) => {
  if (step.site) {
    await page.goto(step.site, {waitUntil: 'networkidle2'});
  }
  for (let i = 0; i < step.inputs.length; i ++) {
    const input = step.inputs[i];
    await page.waitForSelector(input.selector);
    await page[input.action](input.selector, input.value);
  }
  // await page.screenshot({ path: `example${index}.png` })
  await page.waitFor(step.finisher.selector);
  await page[step.finisher.action](step.finisher.selector);
  await page.waitFor(step.finisher.waitFor);
}

exports.executeSteps = async () => {
  const steps = config.steps;
  const browser = await puppeteer.launch({headless: false});

  const page = await browser.newPage();
  for (let i = 0; i < steps.length; i++) {
    await executeSite(page, steps[i], i);
  }
  await browser.close();
}

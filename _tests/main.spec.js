const puppeteer = require("puppeteer");
const chromium = require('chromium');

const { AxeDevToolsPuppeteer } = require('@axe-devtools/puppeteer');
const { getOsChromiumBinPath } = require("chromium/utils");
const AxeDevToolsReporter = require('@axe-devtools/reporter').default;
const axeReporter = new AxeDevToolsReporter("Test page", "./test-results/");

(async ()=>{
    console.log(chromium.path, chromium);
    // const browser = await puppeteer.launch({  
    //     headless: true,
    //     defaultViewport: null,
    //     executablePath: chromium.path ///'Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    // });
    // const page = await browser.newPage();
    // await page.goto("https://stackoverflow.com/questions/74121253/unable-to-launch-puppeteer-on-local-mac-m1");
    // await page.setBypassCSP(true);
    
    // const results = await new AxeDevToolsPuppeteer(page).analyze();
    // axeReporter.logTestResult("Page Test Results", results);

    // await browser.close();

    // await axeReporter.buildHTML('./test-results/'); 
    // await axeReporter.buildJUnitXML('./test-results/'); 
})();
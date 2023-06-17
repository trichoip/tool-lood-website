import scrape from "website-scraper";
import PuppeteerPlugin from "website-scraper-puppeteer";

await scrape({
  urls: ["https://yostarshop.com/view/category/all_items"],
  directory: "yostarshop",
  plugins: [
    new PuppeteerPlugin({
      launchOptions: { headless: false } /* optional */,
      scrollToBottom: { timeout: 10000, viewportN: 10 } /* optional */,
      blockNavigation: true /* optional */,
    }),
  ],
});

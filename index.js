const puppeteer = require('puppeteer');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 5005;
const fs = require("fs");


app.use(express.static("build"))

app.get('/', function (req, res) {
  var options = {
    root: path.join(__dirname)
  };

  var fileName = '/build/index.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.error(err);
    }
  });
});

const server = app.listen(PORT, function (err) {
  if (!fs.existsSync("./build/profile.jpg")) {
    throw new Error("Profile image profile.jpg not found under /build.")
  }

  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);

  if (process.env.NODE_ENV === "prod") {
    convertToPdf()
  }
});


const convertToPdf = async () => {
console.log("Converting in PDF...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const website_url = `http://localhost:${PORT}/`;
  await page.goto(website_url, { waitUntil: 'networkidle0' });
  await page.emulateMediaType('screen');
  const pdf = await page.pdf({
    path: 'cv.pdf',
    margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
    printBackground: true,
    format: 'A4',
  });

  await browser.close().then(() => {
    console.log("Done.");
    server.close()
  });
};
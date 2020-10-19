const fs = require("fs");
const got = require("got");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

async function genPVCTable() {
  const vgmUrl =
    "https://m.investing.com/commodities/pvc-com-futures-historical-data";

  const rsp = await got(vgmUrl);
  const dom = new JSDOM(rsp.body);
  return dom.window.document.querySelector("table").innerHTML;
}

module.exports = { genPVCTable };

// const exec = require("child_process").exec;

// exec(
//   'curl -O "https://m.investing.com/commodities/pvc-com-futures-historical-data"',
//   (error, stdout, stderr) => {
//     console.log("stdout: " + stdout);
//     console.log("stderr: " + stderr);

//     if (error !== null) {
//       console.error("exec error: " + error);
//     }
//   }
// );

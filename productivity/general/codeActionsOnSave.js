import path from "path";
import { promises as fs } from "fs";

async function main() {
  const items = fs.readdir(__dirname);

  for (const item of items) {
    if (path.extname(item) !== ".js") {
      console.log("not a js file");
    } else {
      console.log(`Found js file: '${item}'`);
    }
  }
}

main();

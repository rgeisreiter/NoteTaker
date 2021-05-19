const fs = require("fs");
const util = require("util");
// using npm package from https://www.npmjs.com/package/uniqid
const uniqid = require("uniqid");

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

class Methods {
  write(note) {
    return writeFile("db/db.json", JSON.stringify(note));
  }
  read() {
    return readFile("db/db.json", "utf8");
  }
}

//get notes from//add notes

module.exports = new Methods();

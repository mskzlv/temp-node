const path = require("path");

// console.log(path.sep);

const filePath = path.join("./content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);

console.log(base);

// Получить абсолютный путь D:\tests\NodeJS-freeCodeCamp\my-code\1-node-tutorial\content\subfolder\test.txt
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

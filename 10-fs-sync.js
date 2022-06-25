// const  fs  = require("fs");
// fs.readFileSync
const { readFileSync, writeFileSync } = require("fs");
console.log('start');
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second);

// ПО дефолту метод записывает с нуля даже если файл с контентом существует
writeFileSync("./content/result-sync.txt", `Here is the result ${first}, ${second}`, {
  encoding: "utf8",
  flag: "a", // Флаг ДОБАВЛЯЕТ КОНТЕНТ К ФАЙЛУ
});

console.log(`done with this task`);
console.log(`starting the next one`);
const name = "ashutosh";
const repoCount = 50;

console.log(`${name} ${repoCount}`);

const first = "ashutosh";
console.log(first.toUpperCase());
console.log(first);
console.log(first.charAt(2));
console.log(first.indexOf("a"));

console.log(first.substring(0, 5));
console.log(first);
const anotherString = first.slice(0, 5);
console.log(anotherString);

const newString = "   ashutosh   ";
console.log(newString);
console.log(newString.trim());

const url = "https://ashutosh.com/ashu%20rawat";

console.log(url.replace("%20", "-"));

console.log(url.split("/", 3));

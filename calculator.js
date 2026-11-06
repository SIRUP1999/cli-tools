import { add, sub, mul, div } from "./utils/math.js";

const [operation, atext, btext] = process.argv.slice(2);

const a = Number(atext);
const b = Number(btext);

if (!operation || Number.isNaN(a) || Number.isNaN(b)) {
  console.log("Usage: node calculator.js <add|sub|mul|div>  <number><number>");
  process.exit(1);
}

const operations = { add, sub, mul, div };
const fn = operations[operation];

if (!fn) {
  console.log("Unknown operation: ${operation}");
  process.exit(1);
}

try {
  console.log(fn(a, b));
} catch (err) {
  console.log(`Error: ${err.message}`);
  process.exit(1);
}

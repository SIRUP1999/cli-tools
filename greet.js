const name = process.argv[2] ?? "friend";
const appName = process.env.APP_NAME ?? "App";
console.log(`Hello, ${name}! Welcome to ${appName}`);

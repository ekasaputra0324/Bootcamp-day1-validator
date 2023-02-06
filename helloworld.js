// console.log('Hello world!');
const  fs = require('fs');
// console.log(fs);
// fs.writeFileSync('test.text', 'Hello world Secara Synchronous');
fs.readFile('test.text', 'utf-8', (err, data) => {
    if (err)  throw err;
    console.log(data);
});
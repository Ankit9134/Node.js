const fs = require('fs');

// Using a callback
fs.readFile('example.txt', 'Node.js handles asynchronous operations', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log('This will run before the file is read');

// Using Promises
fs.promises.readFile('example.txt', 'Node.js handles asynchronous operations ')
  .then(data => console.log(data))
  .catch(err => console.error(err));

console.log('This will still run before the file is read');

// Using async/await
async function readFile() {
  try {
    const data = await fs.promises.readFile('example.txt', 'Node.js handles asynchronous operations ');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFile();
console.log('This will also run before the file is read');
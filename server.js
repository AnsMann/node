const express = require("express");
const uid = require("uid");

const app = express();

app.use(express.json());
app.use(express.static("./dist"));

let i = 0;
let users = [
  { name: "Joe", role: "mechanic", id: "140" },
  { name: "Dr. Who", role: "time traveler", id: "150" },
  { name: "Aragorn", role: "king", id: "160" },
  { name: "Bart Simpson", role: "eat my shorts", id: "170" }
];

app.listen(3000, err => {
  err ? console.log(err) : console.log("Server ready");
});
app.get("/", (req, res) => {
  res.send(`Hello world ${i++}`);
});
app.get("/users", (req, res) => {
  res.json(users);
});
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json(users.find(user => user.id === id));
});

app.post("/users", (req, res) => {
  users = [...users, req.body];
  users.forEach(item => (item.id = uid()));

  res.json(users.find(user => req.body.name === user.name));
});
/*const fs = require("fs");

fs.readFile(__dirname + "/counter.txt", "UTF8", (err, data) => {
  if (err) {
    fs.writeFile(__dirname + "/counter.txt", `actual count is: 0`, err => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("file was written");
      }
    });
  } else {
    let getSplittedData = data.split(": ");
    let lastNumber = getSplittedData[1];
    lastNumber++;
    fs.writeFile(
      __dirname + "/counter.txt",
      `actual count is: ${lastNumber}`,
      err => {
        if (err) {
          console.log(err.message);
        } else {
          console.log("file was written");
          console.log(`actual count is: ${lastNumber}`);
        }
      }
    );
  }
});

from jerry

const fs = require('fs')
​
const filePath = __dirname + '/counter.txt'
​
fs.readFile(filePath, 'utf8', (err, text) => {
 if (err) {
  writeFile(0)
 } else {
  const startIndex = text.lastIndexOf(' ')
  const num = Number(text.slice(startIndex + 1))
  writeFile(num + 1)
 }
})
​
function writeFile(count) {
 fs.writeFile(filePath, `Last count was ${count}`, err => {
  console.log('File created', filePath, count)
 })
}

*/

const fs = require("fs");

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

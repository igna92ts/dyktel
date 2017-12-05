const fs = require('fs'),
csv = require("fast-csv"),
request = require('request');

exports.readCsv = path => {
  const stream = fs.createReadStream(path);
  return new Promise((resolve, reject) => {
    const rows = [];
    csv
      .fromStream(stream, { headers: true })
      .on("data", (data) => {
        rows.push(data);
      })
      .on("end", () => {
        resolve(rows);
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

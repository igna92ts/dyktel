const fs = require('fs'),
  csvReader = require("fast-csv"),
  csvWriter = require('csv-write-stream');

exports.readCsv = path => {
  const stream = fs.createReadStream(path);
  return new Promise((resolve, reject) => {
    const rows = [];
    csvReader
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

exports.writeCsv = data => {
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream('out.csv'))
  data.forEach(row => {
    writer.write(row);
  });
  writer.end();
}

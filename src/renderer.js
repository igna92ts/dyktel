// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const sender = require('./form_sender'),
  csvReader = require('./csv_reader');

// search.executeSteps().then(() => {
//   document.getElementById("imageid").src="./example.png";
// });
// $(document).ready(() => {
//   const table = $('#example').DataTable();
// });

document.addEventListener('drop', function (e) {
  e.preventDefault();
  e.stopPropagation();
  for (let f of e.dataTransfer.files) {
    handleCsv(f);
  }
});
document.addEventListener('dragover', function (e) {
  e.preventDefault();
  e.stopPropagation();
});

const handleCsv = file => {
  if (file.type !== 'text/csv') {
    alert('File must have `.csv` extension');
  } else {
    csvReader.readCsv(file.path).then(data => {
      sender.executeSteps(data);
      // const columns = [];
      // for(let key in data[0]) {
      //   columns.push({ title: key, data: key });
      // }
      // const table = $('#example').DataTable({
      //   data,
      //   columns
      // });
    });
  }
}
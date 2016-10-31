
var fs = require("fs");
var XLSX = require('xlsx');

var workbook = XLSX.readFile('sample.xlsx');

workbook.SheetNames.forEach(function(y) {
  var worksheet = workbook.Sheets[y];
  for (var z in worksheet) {
    if(z[0] === '!') continue;
    console.log(z + "=" + JSON.stringify(worksheet[z].v));
  }
});
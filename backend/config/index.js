const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

const filePath = path.join(__dirname, "Sahil_Husen_Full_Stack_Dev_pdf.pdf");
console.log("PDF Path:", filePath);

let dataBuffer = fs.readFileSync(filePath);

pdf(dataBuffer)
  .then(function(data) {
    fs.writeFileSync("output.txt", data.text);
    console.log("Text extracted and saved to output.txt");
  })
  .catch(err => {
    console.error("Failed to parse PDF:", err);
  });


  
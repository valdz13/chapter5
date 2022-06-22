// console.log('hai');

//=====================CORE MODULE================================
// const fs = require('fs');

// const readingFiles = fs.readFileSync('./README.txt',"utf-8");

// console.log(readingFiles);


// const os = require('os');

// const readingLocation = os.homedir();

// console.log(readingLocation);
//==============END OF CORE MODULE=================================

// ======================local module=================================
// const calculator = require('./utils/calculator');

// const tambahkan = calculator.addition(2,3);

// console.log(`tambahkan 2 dan 3 = ${tambahkan}`);

// const kurangi = calculator.substract(99,67);

// console.log(`kurangi 99 dan 67 = ${kurangi}`);
// ===================end of local module=============================

//======================3RD PARTY MODULE==============================

const math = require('mathjs');

const hitung = math.add(2,3);

console.log(hitung);




//=======================END OF 3RD PARTY MODULE======================
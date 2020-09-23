const xlsx = require('node-xlsx')
const fs = require('fs');

/**
 * 开始
 */
function start(req, res) {
  // const file = 'address.csv'
  const file = 'add.xlsx'
  const path = `${__dirname}/${file}`;

  //表格解析
  let sheetList = xlsx.parse(path);
  
  let addressList = []

  //对数据进行处理
  sheetList.forEach((sheet) => {
    sheet.data.forEach((row, index) => {
      let rowIndex = index;
      addressList.push(row)
      // row.forEach((cell, index) => {

      //   let colIndex = index;

      //   if (cell !== undefined) {

      //     sheet.data[rowIndex][colIndex] = cell.replace(/replaced text1/g, '')

      //       .replace(/replaced text2/g, '');

      //     let reg = /\{([\u4e00-\u9fa5\.\w\:\、\/\d\s《》-]*)\|[\u4e00-\u9fa5\.\w\:\、\/\d\s《》-]*\}/;

      //     let tempStr = sheet.data[rowIndex][colIndex];

      //     while (reg.test(tempStr)) {

      //       tempStr = tempStr.replace(reg, RegExp.$1);

      //       // console.log(tempStr);

      //     }

      //     sheet.data[rowIndex][colIndex] = tempStr;

      //   }

      // })

    })

    // console.log(sheet);

  })
  
  fs.writeFileSync('data.json', JSON.stringify(addressList));

  

}

/**
 * 入口
 */
start();
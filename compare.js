const adData = require('./data.json')
const mzData = require('./address/data.json')

// console.log(adData)
function isExist(code) {
  let flag = false
  for (let i = 0; i < adData.length; i++) {
    if (String(adData[i][4]) === code) {
      flag = true
      break
    }
  }
  if (!flag) {
    console.log(code)
  }

  return flag
}

mzData.forEach(province => {
  province.children.forEach(city => {
    city.children.forEach(area => {
      isExist(area.code)
    })
  })
})
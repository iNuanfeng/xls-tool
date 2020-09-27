const data2017 = require('./address/data2017.json')
const data2020 = require('./address/data2020.json')

const arr2017 = []
const arr2020 = []

function fillArr(data, arr) {
  data.forEach(province => {
    province.children.forEach(city => {
      city.children.forEach(area => {
        arr.push(area.code)
      })
    })
  })
}

fillArr(data2017, arr2017)
fillArr(data2020, arr2020)

const resultRemove = []
const resultAdd = []

arr2020.forEach(item => {
  if (!arr2017.includes(item)) {
    resultAdd.push(item)
  }
})
arr2017.forEach(item => {
  if (!arr2020.includes(item)) {
    resultRemove.push(item)
  }
})

console.log(resultAdd.length, resultRemove.length)
// console.log(resultAdd)
console.log(resultRemove)

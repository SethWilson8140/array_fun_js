// comment in js

// Creat and array
//creat an empty array
var myArr = new Array()

// recommended method
var myArr2 = []

// Creat an array of a certain size
var myBigArr = new Array(100)

var myBigArr3 = [,,,]

var myBigArr2 = [1,2,3,4,]

var array = []

array.length = 8

// Give us size of the array
Array.length

//Position of items in the array

//index
var superArr = ['rock', 'paper', 'black']

// 0 base, starts at zero
supArr[1]

//inset in the array
var supArr = []

supArr.push('Stan Lee','Spiderman', 1)

// it will add into the beginning of an array
supArr.unshift(1, 2.3, true)

//remove

//mutable vs immutable
// mutable are items that can be changed
// immutable are items that cannot be changed
var sArr = [1, 2, 3]

//removes the last element of the array and returns it, mutable
sArr.pop

// removes the frist element of the array and returns it, mutable
sArr.shift

// mutable
delete sArr[2]

// immutable
sArr.slice(2)


// iterate, going through an array, loops
var nums = [ 1, 2, 3, 4, 5]

// forEach
nums.forEach(function(num, index) {
    console.log("index of: " + index + "values: " + num)
}) 

// map
nums.map(function(num, index) {
    console.log(++num)
})

// filter
nums.filter(function(num, index) {
console.log(num % 2 == 0)
})

  ['s', 23, 23.2, true, false].filter(boolean)

// for 
for (var index = 0; index < nums.length; index++) {
    console.log(num[index])
}

// type checking
// checkes for what data type is something?
typeof []
typeof 0
typeof true

// misc functions
var lastArr = ["rock", "green", "blue"]

// returns a string of what the array looks like
lastArr.toString

// Bring two values together
lastArr.join()

// reverses the array
lastArr.reverse

// put the items in orders, asc, alphabetical for
// strings, numbers and floats < >
lastArr.sort()

// search the array
lastArr.find()

// tell the index of the value
lastArr.indexOf()

// boolean on if the array includes a value
lastArr.includes()

// combine two arrays
lastArr.concat()
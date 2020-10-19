// INTRO TO ARRAYS

var name = "edward"
var num = 4
var check = false

var dblArray = [2.4, 1.6, 3.14]
var array1 = [1,"edward", true, 3.4]

var numberCollection = [ 1, 2, 3, 4, 5, 6, 7]
// RECALLING DATA FROM A DATA STRUCTURE
// index - address
console.log(numberCollection[5]) 


var stringArray = ["edward", "john", "steve", "bob", "brad"]
console.log(stringArray[2])

// ADDING AND REMOVING DATA FROM ARRAY
// PUSH AND POP METHODS, HOW LONG IS THE ARRAY
console.log(stringArray) // ["edward", "john", "steve", "bob", "brad"]
stringArray.push("eddie")
stringArray.push("ed")
console.log(stringArray) // ["edward", "john", "steve", "bob", "brad", "eddie", "ed"]

stringArray.pop()
stringArray.pop()
stringArray.pop()
console.log(stirngArray) // ["edward", "john", "steve", "bob"]

// ARRAYS AND FOR LOOPS
var numArr = [1,2,3,4,5,6,7,8,9,10]


var numArr2 = []
for(var i = 1; i <= 1000; i++){
    numArr2.push(i)
}


var mysteryArr = ["hello", "happy", "spooktober", "holiday", "yay", "candy"]
// GIVEN A VARIABLE mysteryArr, print out ALL OF THE ENTRIES WITHIN THE ARRAY

for(var i = 0; i < mysteryArr.length; i++ ){
    console.log(mysteryArr[i])
}
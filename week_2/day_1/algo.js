var testArr = [6,3,5,1,2,4]

// WRITE CODE FOR MULTIPLYING VALUE IN ARRAY BY ITS INDEX POSITION
// for(var i = 0; i < testArr.length; i++){
//     // // CALUCLATING VALUE IN ARRAY MUTIPLIED BY ITS INDEX
//     // var newNum = testArr[i] * i
//     // // STORING NEWNUM INSIDE THE ARRAY
//     testArr[i] = testArr[i] * i
// }
// console.log(testArr)



// FUNCTIONS
// DEFINING A FUNCTION VS CALLING A FUNCTION
function multiplyIndex(array){
    for(var i = 0; i < array.length; i++){
        array[i] = array[i] * i
    }
    return array
}

var newArr = [1,2,3,4]
console.log([multiplyIndex(newArr)])
console.log(multiplyIndex([1,2,3,4]))
console.log(multiplyIndex([0,4,7,23,57]))





// ARRAY
// INDEX - VALUE
var array = [1,2,3,4]
var names = ['edward', 'john', 'steve']
console.log(array[2])
// ARRAYS CAN EASILY LOOPED THROUGH


// OBJECT
// KEY - VALUE
var userInfo = {
    "first_name" : "Edward",
    "last_name" : "Im",
    "age" : 30,
    "street_address" : "123 Main St.",
    "city" : "Boise",
    "state" : "ID",
    "zip_code" : 83767,
    "cart" : ["pencil", "eraser", "markers", "whiteboard"]
}
console.log(userInfo.cart[2])
console.log(userInfo["cart"][0])

console.log(userInfo["street_address"])
console.log(userInfo.street_address)
// BEING ABLE TO DECIDE THE KEY NAME

// JSON - JAVASCRIPT OBJECT NOTATION

var userList = [
    {
        "name" : "Edward Im",
        "age" : 30
    },
    {
        "name" : "Edward Im",
        "age" : 30
    },
    {
        "name" : "Edward Im",
        "age" : 30
    },
    {
        "name" : "Edward Im",
        "age" : 30
    },
    {
        "name" : "Edward Im",
        "age" : 30
    },
]
console.log(userList[2].name )
console.log(userList[2].age )
console.log(userList[4]['name'] )

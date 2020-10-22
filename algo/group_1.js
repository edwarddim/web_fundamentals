// PUSH FRONT
// GIVEN A NUMBER AND AN ARRAY, ADD THE GIVEN NUMBER TO THE FRONT OF THE ARRAY
// RETURN AN ARRAY WITH THE NEW VALUES
// pushFront([1,2,3,4] , 9) => [9,1,2,3,4]
// PSEUDOCODE!!
var arr [1, 2, 3, 4, 5]

//IN WHICH DIRECTION SHOULD THIS FOR LOOP GO?
function pushFront(array, num){
    // WRITE LOGIC FOR ADDING NUM TO FRONT OF ARRAY
    var newArr = []
arrvar arr = []1,2,3,4,5
    newArr.push(arr[arr.length-1])
    for(var i = 0; i <arr.length -1; i ++){
        newArr.push(arr[i])
    }

}
pushFront([1,2,3,4] , 9)

//   POP FRONT
  // GIVEN AN ARRAY REMOVE THE FRONT NUM                           BER OF THE ARRAY
  // RETURN AN ARRAY WITH
// popFront([1,2,3,4,5]) => [2,3,4,5]

function popFront(array){
}

// ----------------------- WEDNESDAY ------------------------ //
// ---------------------------------------------------------- //

// COIN CHANGE
// GIVEN A DOLLAR AMOUNT, RETURN THE LEAST AMOUNT OF COINS TO
// GET TO THE GIVEN AMOUNT
// EX. 51 => "2 QUARTER, 0 DIME, 0 NICKEL, 1 PENNY"
// EX. 123 => "4 QUARTER, 2 DIME, 0 NICKEL, 3 PENNNY"
// EX. 8 => "0 QUARTER, 0 DIME, 1 NICKEL, 3 PENNY"
// {
//     "quarter" : 2,
//     "dime" : 0,
//     "nickel" : 0,
//     "penny" : 1
// }

function coinChange(amount){
    
}

// ----------------------- THURSDAY ------------------------- //
// ---------------------------------------------------------- //
// GIVEN AN ARRAY OF NUMBERS, RETURN AN ARRAY FILLED WITH ALL THE TWO NUM SUMS WITHIN THE ARRAY
// twoNumSum([1,2,3]) => [2, 3, 4, 4, 5, 6]
function twoNumSum(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        for(var j = i; j < arr.length; j++){
            // use push()
            newArr.push(arr[i] + arr[j]);
            // 1 + 1 = 2
            // 1 + 2 = 3
            // 1 + 3 = 4
            // 2 + 1 = 3
        }
    }
    return newArr;

}
console.log(twoNumSum([1,2,3]));


var array = [1,2,3,4,5]
for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array.length; j++){
        console.log(i,j)
    }
}

// [2, 3, 4, 4, 5, 6]

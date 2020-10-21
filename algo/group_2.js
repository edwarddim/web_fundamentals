// PUSH FRONT
// GIVEN A NUMBER AND AN ARRAY, ADD THE GIVEN NUMBER TO THE FRONT OF THE ARRAY
// RETURN AN ARRAY WITH THE NEW VALUES
// pushFront([1,2,3,4] , 9) => [9,1,2,3,4]
function pushFront(array, num){
    var newArr = [num];
    for(var i = 0; i < array.length; i++) {
        newArr.push(array[i]);
    }
    return newArr;
}
console.log(pushFront([1,2,3,4], 9))

// POP FRONT
// GIVEN AN ARRAY REMOVE THE FRONT NUMBER OF THE ARRAY
// RETURN AN ARRAY WITH
// popFront([1,2,3,4,5]) => [2,3,4,5]
function popFront(array){
    var newArr = [];
    for(var i = 1; i < array.length; i++) {
        newArr.push(array[i]);
    }
    return newArr;
}
console.log(popFront([1,2,3,4,5]));


var Cats = ["Purrseus", "Venus"];
function pushFront(Cats, Kit){
    for(var i = Cats.length; i > -1; i--){
        Cats[i] = Cats[i - 1]
    }
    Cats[0] = Kit
    return(Cats)
}
console.log(pushFront(Cats, "Teagan"))


// ----------------------- WEDNESDAY ------------------------ //
// ---------------------------------------------------------- //

// COIN CHANGE
// GIVEN A DOLLAR AMOUNT, RETURN THE LEAST AMOUNT OF COINS TO
// GET TO THE GIVEN AMOUNT
// EX. 51 => "2 QUARTER, 0 DIME, 0 NICKEL, 1 PENNY"
// EX. 123 => "4 QUARTER, 2 DIME, 0 NICKEL, 3 PENNNY"
// EX. 8 => "0 QUARTER, 0 DIME, 1 NICKEL, 3 PENNY"
    var quarter = 25
    var dime = 10
    var nickel =5
    var penny = 1
// {
//     "quarter" : 2,
//     "dime" : 0,
//     "nickel" : 0,
//     "penny" : 1
// }

// LOOK AT TOTAL AMOUNT, START WITH BIGGEST VALUE COIN AND DIVIDE IT BY YOUR BIGEST VALUE
// SEE WHAT YOU HAVE LEFT OVER AND WORK YOUR WAY DOWN TO THE SMALLEST VALUE COIN UNTIL THERES NO CHANGE LEFT OVER

// 51 % 25 Modulus or "mod"
// 1 % 10
// 1 % 5
// 1 % 1

// 1. Create an object variable to keep track of coin amounts.
// 2. Divide the given amount by 25. Math.floor the result and assign it to the value for the quarter key.
// 3. Mod amount by 25
// 4. Divide the remainder by 10. Math.floor the result and assign it to the value for the dime key.
// 5. Mod amount by 10
// 6. Divide the remainder by 5. Math.floor the result and assign it to the value for the nickel key.
// 7. Mod amount by 5
// 8. Assign it to the value for the penny key.

function coinChange(amount){
    var change = {
        quarter : 0,
        dime : 0,
        nickel : 0,
        penny : 0
    }

}
// PUSH FRONT
// GIVEN A NUMBER AND AN ARRAY, ADD THE GIVEN NUMBER TO THE FRONT OF THE ARRAY
// RETURN AN ARRAY WITH THE NEW VALUES
// pushFront([1,2,3,4] , 9) => [9,1,2,3,4]
function pushFront(array, num){
    // LOGIC FOR PUSHING NUMBER TO FRONT

}
console.log(pushFront([1,2,3,4], 9))
pushFront([0,0,0,0,0], 1)

// POP FRONT
// GIVEN AN ARRAY REMOVE THE FRONT NUMBER OF THE ARRAY
// RETURN AN ARRAY WITH
// popFront([1,2,3,4,5]) => [2,3,4,5]
function popFront(array){

}
popFront([1,2,3,4])


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
var quarter = 25
var dime = 
var nickel
var penny
var amount 
function coinChange(amount){

}

function coinChange(num) {
    var total = {
            "quarterCount": 0,
            "dimeCount"   : 0,
            "nickelCount" : 0,
            "pennyCount"  : 0
    }
    for(var i = 0; i <=5; i++) {
            if(num == 0) {
                    return total
            }
            if(num >= 25) {
                    total.quarterCount = Math.floor((num / 25));
                    num = num - (25 * total.quarterCount)
            }
            if(num >= 10 && num < 25) {
                    total.dimeCount = Math.floor((num / 10));
                    num = num - (10 * total.dimeCount)
            }
            if(num >= 5 && num < 10) {
                    total.nickelCount = Math.floor((num / 5));
                    num = num - (5 * total.nickelCount);
            }
            else {
                    total.pennyCount = num;
                    num = num - total.pennyCount;
            }
    }
}

console.log(coinChange(137));
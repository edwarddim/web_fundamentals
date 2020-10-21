// PUSH FRONT
// GIVEN A NUMBER AND AN ARRAY, ADD THE GIVEN NUMBER TO THE FRONT OF THE ARRAY
// RETURN AN ARRAY WITH THE NEW VALUES
// pushFront([1,2,3,4] , 9) => [9,1,2,3,4]
// CAN'T USE SLICE OR SPLICE METHOD
function pushFront(array, num){

}

// POP FRONT
// GIVEN AN ARRAY REMOVE THE FRONT NUMBER OF THE ARRAY
// RETURN AN ARRAY WITH
// popFront([1,2,3,4,5]) => [2,3,4,5]
// CAN'T USE SLICE OR SPLICE METHOD
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

// CREATE A VARIABLE TO STORE AMOUNT OF COINS

// SEE HOW MANY QUARTERS GO INTO THE AMOUNT
// CALCULATE THE AMOUNT LEFT AFTER TAKING AS MANY QUARTERS OUT

// SEE HOW MANY DIMES GO INTO AMOUNT
// CALCUATE THE AMOUNT LEFT AFTER TAKING AS MANY DIMES OUT

// SEE HOW MANY NICKELS GO INTO AMOUNT
// CALCUATE THE AMOUNT LEFT AFTER TAKING AS MANY NICKELS OUT

// SEE HOW MANY PENNIS GO INTO AMOUNT
// CALCUATE THE AMOUNT LEFT AFTER TAKING AS MANY PENNIES OUT

// 134 / 25 = 5.something
function coinChange(amount){
    var quarters = 0
    var dimes = 0
    var nickels = 0
    var pennies = 0

    var change = {}

    quarters = Math.floor(amount / 25)
    change["quarters"] = Math.floor(amount / 25)
    amount = amount % 25

    dimes = Math.floor(amount / 10)
    change["dimes"] = Math.floor(amount / 10)
    amount = amount % 10

    nickels = Math.floor(amount / 5)
    change["nickels"] = Math.floor(amount /5)
    amount = amount % 5

    pennies = amount
    change["pennies"] = amount

    console.log("Quarters: ", quarters)
    console.log("Dimes: ", dimes)
    console.log("Nickels: ", nickels)
    console.log("Pennies: ", pennies)
    return change
}

console.log(coinChange(51)) // => "2 QUARTER, 0 DIME, 0 NICKEL, 1 PENNY"




// ----------------------- THURSDAY ------------------------- //
// ---------------------------------------------------------- //







// ----------------------- FRIDAY --------------------------- //
// ---------------------------------------------------------- //
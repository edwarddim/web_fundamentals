// PUSH FRONT
// GIVEN A NUMBER AND AN ARRAY, ADD THE GIVEN NUMBER TO THE FRONT OF THE ARRAY
// RETURN AN ARRAY WITH THE NEW VALUES
// pushFront([1,2,3,4] , 9) => [9,1,2,3,4]
// NO BUILIT IN METHODS LIKE SHIFT AND UNSHIFT
var arr = [1, 2, 3, 4, 5]
function pushFront(arr, num) {
    var newArr = []
    arr.push(9)
}
pushFront(arr, 9);


// POP FRONT
// GIVEN AN ARRAY REMOVE THE FRONT NUMBER OF THE ARRAY
// RETURN AN ARRAY WITH
// popFront([1,2,3,4,5]) => [2,3,4,5]
    
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
// {
//     "quarter" : 2,
//     "dime" : 0,
//     "nickel" : 0,
//     "penny" : 1
// }
function coinChange(amount){
    var quarter= 0
    var dime= 0
    var nickel = 0
    var penny = 0
    var array =[]
    while(amount > 25){
        quarter++
        amount = amount - 25 
    }
    
    array.push(quarter,'quarter')
    
    while(amount > 20) {
        dime++
        amount = amount - 10
    }
    
    array.push(dime,'dime')
    
    while(amount > 5){
        nickel++
        amount = amount - 5
    }
    
    array.push(nickel,'nickel')
    
    while(amount > 1){
        penny++
        amount = amount - 1
    }
    array.push(penny,'penny')
    
    return 
    
}
coinChange()

        //Im going to test something out

        var amount;
        var quarter = 25;
        var quarterCount;
        var dime = 10;
        var dimeCount
        var nickle = 5;
        var nickelCount;
        var penny = 1;
        var pennyCount;
        var change;

        function coinchange (){
            
        100 - amount = change

        if (change >= quarter){
            change % 25 = 0
            quartercount++
        console.log = "quarter:" quarterCount;
        }
        
        if else (change)

        }
        

// ----------------------- THURSDAY ------------------------- //
// ---------------------------------------------------------- //
// GIVEN AN ARRAY OF NUMBERS, RETURN AN ARRAY FILLED WITH ALL THE TWO NUM SUMS WITHIN THE ARRAY
// twoNumSum([1,2,3]) => [2, 3, 4, 4, 5, 6]
function twoNumSum(arr){
for(i = 0; 1 < arr.length; i++){
    for(j = 0; < arr.length; j++)

}
}
console.log(twoNumSum([1,2,3]))



function TwoNumSum (array){
    var newArr =[]
    
    for(var i = 0; i < array.length; i++){
        for(var j = i ; j < array.length; j++){ // nice
            newArr.push(array[i] + array[j])
        }
    }
    return newArr;
}
console.log(TwoNumSum([1,2,3]))
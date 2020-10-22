// Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  
// Every time the array has three evens in a row, print "Even more so!".

// ----------------- PSEUDOCODE --------------------------------- //
// WE NEED TO ITERATE THROUGH THE ARRAY
// INSIDE THE LOOP, WE ARE CHECKING TO SEE IF VALUE IS EVEN OR ODD
// WE NEED EVEN COUNTER AND ODD COUNTER

// IF WE SEE THREE EVEN NUMBERS IN A ROW WE PRINT "EVEN MORE SO"

// DEFINING THE FUNCTION
function evensAndOdds(array){
    var evenCount = 0
    var oddCount = 0
    for(var i = 0; i < array.length; i++){
        if( array[i] % 2 == 0){
            evenCount++
            oddCount = 0
            if(evenCount == 3){
                console.log("EVEN MORE SO!")
                evenCount = 0
            }
        }
        else{
            oddCount++
            evenCount = 0
            if(oddCount == 3){
                console.log("THAT'S ODD")
                oddCount = 0
            }
        }
    }
}

// CALLING(EXECUTING) THE FUNCTION
evensAndOdds([2,4,7,8])
evensAndOdds(["words", "name", "time"])



// REVERSE GIVEN ARRAY
// WITH A NEW ARRAY
function reverseArray(array){
    var newArr = []
    for(var i = array.length- 1; i >= 0; i-- ){
        newArr.push(array[i])
    }
    return newArr
}
reverseArray([1,2,3,4,5])

function reverseArrayInPlace(array){
    for(var i = 0; i < Math.floor(array.length/2); i++){
        var temp = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = temp
    }
    return array
}
console.log(reverseArrayInPlace([1,2,3,4,5]))
console.log(reverseArrayInPlace({}))
console.log(reverseArrayInPlace([]))


// Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  
// Every time the array has three evens in a row, print "Even more so!".

// RIOT //
// R - RETIERATE
// I - INPUT
// O - OUTPUT
// T - TEST CASES
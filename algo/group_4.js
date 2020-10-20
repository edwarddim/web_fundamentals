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
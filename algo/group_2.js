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

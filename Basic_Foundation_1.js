// 1. Get 1 to 255
var newArray = [];
function needNumbersBig(){
    for(var i = 1; i<= 255; i++) {
        newArray.push(i);
    }
    return newArray;
}
console.log(needNumbersBig());

// 2. Get even 1000

var sum = 0;
function sumEvenThou() {
    for(var i = 0; i<=1000; i++) {
        if (i % 2 != 0) {
            sum += i;
            
        }
        
    }
    return sum;
}
console.log(sumEvenThou());

// 3. Sum odd 5000

var sum = 0;
function sumOddNum(){
    for(var i = 0; i<= 5000; i++) {
        if (i % 2 == 1) 
            sum += i;
        
    }
    return sum;
}
console.log(sumOddNum());

// 4. Iterate an array

var sum = 0;
function sumArray(array) {
    for( var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
var x = [1,2,3,4,76,3,4,65,7645,34,34,54,3]
console.log(sumArray(x))

// 5. Find Max

var max = 0;
function findMax(array) {
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}
var x = [1,2,5,7,3,432,345,53,5467,99999];
console.log(findMax(x));

// 6. Find Average

var sum = 0;
var average = 0;
function averageArray(array) {
    for(var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum/array.length;
}

var x = [1,2,3,4,56,2,32,34,3,5436456,47,57,5,3,5,35342,42,56346,4324,23,44,3,2,1];
var y = [2,4,56,6,7,43,534];
console.log(averageArray(y));

// 7. Array odd


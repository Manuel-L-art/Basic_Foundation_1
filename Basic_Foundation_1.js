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

var x = [1,2,3,4,56,2,32,34,3,5436456,47,57,5,3,5,35342,42,56346,4324,23,44,3,2,1]; // lol im not double-checking this function with this variable

var y = [2,4,56,6,7,43,534];
console.log(averageArray(y));

// 7. Array odd

var oddNums = [];
function findOdds() {
    for(var i = 1; i <= 50; i++) {
        if( i % 2 != 0) {
            oddNums.push(i);
        }
    }
    return oddNums;
}
console.log(findOdds());

// 8. Greater than Y

var greaterY = 0;
function greaterThanY(arr, num) {
    for(var i = 0; i< arr.length; i++) {
        if(arr[i] > num) {
            greaterY++;
        }
    }
    return greaterY;
}
var x = [1,2,3,45,5,67,7,45,1];
var g = 9;

console.log(greaterThanY(x,g));

// 9. Squares

var newArray = [];
function squaresArrays(arr) {
    for(var i = 0; i < arr.length; i++) {
        newArray.push(arr[i]**2);
    }
    return newArray;
}
var oldArray = [1,2,3,4,5,6,9];
console.log(squaresArrays(oldArray));

// 10. Negatives


function newNonNegs(arr) {
    for(var i = 0; i < arr.length; i++) {
        if( arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
var u = [1,2,3,4,-6,-4,32,-4,1];
console.log(newNonNegs(u));

// 11. Max / Min / Avg

function findMax(arr) {
    var mx = 0;
    var mn = arr[0];
    var avg = 0;
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        if( arr[i] > mx) {
            mx = arr[i];
        }
        if(arr[i] < mn) {
            mn = arr[i];
        }
        avg = avg + arr[i];
    }
    newArr.push(mx);
    newArr.push(mn);
    newArr.push((avg/arr.length));
    return newArr;
}

var x = [1,23,456,5,56,63];
console.log(findMax(x));

// 12. Swap Values

function swapFirstLast(arr) {
        var temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
        return arr;
}

var x = [2,5,6,4,5,7,76756,45,4,34,34,5,54];
console.log(swapFirstLast(x));

// 13. Number to Sting

function numToString(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
     return arr;
}
var x = [565,657675,-454,-34,4,-343,434,-43,5];
console.log(numToString(x));
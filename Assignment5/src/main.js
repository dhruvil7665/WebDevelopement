//String reversal inputs
/**
 *
 * @type {string} name variable of type string that is required to be reversed
 * @type {string} variable revname that stores the reversed string
 */
let name="Web Design And UX Engineering"
/**
 *
 * @type {string}
 */
let revname=reverse(name);
console.log("The reverse of \""+name+"\" is \""+revname+"\"");
//end of String reversal inputs



//Start of Binary Search Inputs
/**
 *
 * @type {number[]} array for Integers
 * @type {number} type of variable x that is the element to be found
 */
let a = [1,2,3,4,5];
/**
 *
 * @type {number}
 */
let x = 5;

/**
 *
 * @type {boolean} result variable that stores the boolean result of binary search algorithm
 */
let result = binSearch(a,x);

/**
 * @flow if loop to print
 */
if(result){
    console.log("Number "+x+" found in the array ["+a+"]");
}
else{
    console.log("Number "+x+" not found in the array ["+a+"]")
}
//End of binary search inputs

//Inputs for QuickSort
/**
 *
 * @type {number[]} Array of type Numbers that needs to be sorted
 *
 */

let sortArray = [4,7,8,9,3,6];
console.log("Unsorted array "+sortArray);
quickSort(sortArray,0,sortArray.length-1);
console.log("sorted Array "+sortArray);
//End of Inputs for QuickSor

//Functions

//Reverse
/**
 *
 * @param s of type {string} that is passed on to the function from the main class which is the string to be reversed
 * @returns {string}
 */
function reverse(s){
    let result = "";
    for (let i = s.length - 1; i >= 0; i--){
        result = result + s[i];
    }
    return result;
}


//Binary search function
/**
 *
 * @param a is a type {number} array that is passed to find the element
 * @param x is a type of {number} variable
 * @returns {boolean}
 */

function binSearch(a,x){
    let first=0, last = a.length-1;
    /**
     * @flow while loop to implement the binary search algorithm
     */
    while(first<=last){

        let middle=Math.floor((first+last)/2);

        if (a[middle]==x){
            return true;
        }
        else if(a[middle]<x){
            first=middle+1;
        }
        else{
            last = middle-1;
        }

    }
    return false;
}


//Code for QuickSort
/**
 *
 * @param a{number[]} of type {Array} that needs to be sorted
 * @param first of type {Number} that is the first index of array
 * @param last of type {Number} that is the last index of array
 * @function quickSort is a recursive function that sorts a given array by divide and conquer method
 */
function quickSort(a,first,last){
    if(first<last){
        let pIndex = part(a,first,last);

        quickSort(a,first,pIndex-1);
        quickSort(a,pIndex+1,last);

    }
}

/**
 *@function part is a function that gets the partition index by sorting array on the left and right side of the pivot
 * @param {Array} ARRAY TO SORT USING QUICK SORT
 * @param first{Number} FIRST INDEX OF THE ARRAY
 * @param last of type {Number} LAST INDEX OF THE ARRAY
 * @returns {Number} RETURNS PARTITION INDEX
 *
 */
function part(a,first,last){
    let pivot = a[last];
    let i = first -1;

    for(let j=first;j<last;j++){
        if(a[j]<=pivot){
            i++;
            let temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
    let temp=a[i+1];
    a[i+1]=a[last];
    a[last]=temp;

    return i+1;
}

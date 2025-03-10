// function to calculate the sum of an array

let sum = 0;

function arrSum(Arr){
for (i = 0; i < Arr.length; i++){
    sum += Arr[i]
}
return (sum);
}
console.log(arrSum([8,4,10]));


// function to filter array elements based of function 

function filterarr(arr){

    let newArr = arr.filter(above30)
    
    function above30(num){
            return num > 20 
    }
    
    return newArr
}


// function to find the min and max number in an array

// get the maximun number
function setMini(a) {
    let mini = Infinity;
    for (let i = 0; i < a.length; i++) {
        if (a[i] < mini) {
            mini = a[i];
        }
    }
    return mini;
}

// get the maximun number
function setMaxi(a) {
    let maxi = -Infinity;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > maxi) {
            maxi = a[i];
        }
    }
    return maxi;
}

function maxMin(a) {
    
    return "Minimum Number is: " + setMini(a) + "\nMaximum Number is: " + setMaxi(a)
}

console.log(maxMin([4, 9, 6, 5, 2, 3, 1, 25]))

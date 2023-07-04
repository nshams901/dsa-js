let arr = [12, 45, 67, 98];

const findElement = linearSearch(arr, 8);

function linearSearch (arr, target){
    for (let i = 0; i < arr.length; i++){
        if( arr[i] === target){
            return i
        }
    }
    return -1;
}

console.log(findElement);

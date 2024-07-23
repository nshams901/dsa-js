const data = [ 5, 32, 4, 65, 9, 87, 43, 1]

const sort = ([...arr]) => {
    const length = arr.length;
    for (let i = 0; i < length; i++){
         for(let j = i + 1; j < length; j++){
            if(arr[j] > arr[i]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
         }
    }
    return arr;
}
const sorted = sort(data)
console.log(sorted);



//  ------------ NOTES ------------
// time complexity of selection sort is O(n ^ 2).

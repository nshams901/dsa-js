const data = [ 5, 32, 4, 65, 9, 87, 43, 1]

const sorted = ([...arr]) => {
    let length = arr.length;

    for(let i = 1; i < length; i++){
        let current = arr[i];
        let j = i - 1;
        while( j >= 0 && arr[j] > current){
            arr[j+1]= arr[j]
            j--;
        }
        arr[j+1] = current 
    }
    console.log(arr);
}

sorted(data)
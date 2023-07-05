let a = [1, 2, 4, 6, 9, 23, 45, 56, 78, 90, ]

const element = binarySearchIterative( a, 45);

function binarySearchIterative( array, target){
    let s = 0;
    let e = array.length - 1;
    let mid = Math.floor(( e+s ) / 2);
    while( s<=e){
        if( target === a[mid]){
            return mid;
        }else if( target > a[mid] ){
            s = mid;
        }else {
            e = mid - 1
        }
        mid = Math.floor( (e + s) / 2);
    }
    return - 1;
}

// console.log(element);

// recursive approach

function binarySearchRecursive(a, start, end) {
    let mid = Math.floor(( end + start) / 2);
    if( !(start<= end)){
        return -1
    }
    if( target === a[mid]){
        console.log("element found at: " + mid);
    } else if( target > a[mid]){
        binarySearchRecursive(a, mid + 1, end)
    } else{
        binarySearchRecursive(a, start, mid -1)
    }
}
let start = 0; let end = a.length -1 ;
let target = 4
let index = binarySearchRecursive(a, start, end );

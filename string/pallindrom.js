const checkPallindrom = ( str ) => {
    let start = 0;
    let end = str.length - 1;
    while( start < end){
        if( str[start] !== str[end]){
            return false;
        };
        start++;
        end--;
    }
    return true;
}

const result = checkPallindrom( 'abaa');
console.log(result);
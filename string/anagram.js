const str1 = 'tea';
const str2 = 'eat';

const checkAnagram = ( str1, str2) => {
    let obj = {}
    if( str1.length !== str2.length){
        return false;
    }
    for(let ch of str1){
        obj[ch] = (obj[ch] || 0) + 1;
    }
    for(let ch of str2){
        if(!obj[ch]){
            return false
        }
        obj[ch] = obj[ch]--;
    }
    return true;
}

const result = checkAnagram('tea', 'eeat')
console.log(result);

'use strict';

var reverseWords = function(s) {
    // using 2-Pointer Approach
    let sArr = s.split(' ');
    let l=0, r=sArr.length-1;
    let revStr = '';

    while(l<r) {
        if (sArr[l] === '') {
            l++;
        }else if (sArr[r] === '') {
            r--;
        }else {
            [sArr[l], sArr[r]] = [sArr[r], sArr[l]]; // Swap
            l++, r--;
        }
    }
    
    for (let str of sArr) {
        if (str !== '') revStr += str+' ';
    }

    return revStr.trim();
};

let s1 = "the sky is blue";
let s2 = "  hello world  ";
let s3 = "a good   example";

console.log(reverseWords(s1));
console.log(reverseWords(s2));
console.log(reverseWords(s3));
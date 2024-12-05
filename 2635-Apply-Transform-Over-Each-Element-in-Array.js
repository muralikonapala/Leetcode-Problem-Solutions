/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let array = [];
    arr.forEach((val, idx)=>{
        array.push(fn(val, idx));
    })
    return array;
    
};
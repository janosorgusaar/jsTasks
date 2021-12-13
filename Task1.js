let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

// JavaScript function “mergeArray” to merge two arrays and removes all duplicates elements.
function mergeArray(a1, a2) {
    let mergedArray = a1.concat(a2);
    let mergedUniqueArray = mergedArray.filter((item, pos) => mergedArray.indexOf(item) === pos)
    return mergedUniqueArray;   
}

console.log(mergeArray(array1, array2));

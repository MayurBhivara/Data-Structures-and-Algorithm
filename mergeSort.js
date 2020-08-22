
let testArr = [3,2,5,6,12,34,22,1];
let testArr2 = [1,3,13,45];
console.log(mergeSort(testArr));

function mergeSort(arr){
    if(arr.length<=1) return arr;
    var mid = Math.floor(arr.length/2);
    var left = mergeSort(arr.slice(0,mid));
    var right = mergeSort(arr.slice(mid));
    return merge(left,right);
}

function merge(array_1 , array_2){
    var i = 0;
    var j = 0;
    let newArr = [];
    while(i < array_1.length && j<array_2.length){
        if(array_1[i]>array_2[j]){
            newArr.push(array_2[j]);
            j++;
        }else{
            newArr.push(array_1[i]);
            i++;
        }
    }
    while(i<array_1.length){
        newArr.push(array_1[i]);
        i++;
    }
    while(j<array_2.length){
        newArr.push(array_2[j]);
        j++;
    }
    return newArr;
}




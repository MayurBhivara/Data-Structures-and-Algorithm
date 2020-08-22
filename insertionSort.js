function insSort(arr){
    for(var i = 1; i<arr.length; i++){
        var val = arr[i];
        for(var j = i-1; j >=0 && arr[j]>val; j--){
            arr[j+1]=arr[j];
        }
        arr[j+1] = val;
    }
    return arr;
}
var aray = [2,24,1,5,7,15];
console.log(aray);
console.log(insSort(aray));
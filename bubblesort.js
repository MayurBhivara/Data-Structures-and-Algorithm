function bubbleSort(arr){
    for(var i = arr.length; i>0; i--){
        var noSwap = true;
        for(var j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}

var ray = [2,4,6,32,5,7,43,1];
console.log(ray);
console.log(bubbleSort(ray));

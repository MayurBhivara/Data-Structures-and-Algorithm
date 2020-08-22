function pivot(arr, start = 0, end = arr.length-1){
    let pivot = arr[start];
    let swapI = start;
    for(var i = start+1; i<=end;i++){
        if(pivot > arr[i]){
            swapI++;
            [arr[swapI],arr[i]]=[arr[i],arr[swapI]];
        }
    }
    [arr[swapI],arr[start]]= [arr[start],arr[swapI]];
    return swapI;
}
function QuickSort(arr, left=0, right= arr.length-1){
    if(left<right){
        var pivotI = pivot(arr,left,right);
        QuickSort(arr, left, pivotI-1);
        QuickSort(arr, pivotI+1, right);
    }
    return arr;
}
var aray = [3,5,1,51,32,15,2,33];
console.log(QuickSort(aray));
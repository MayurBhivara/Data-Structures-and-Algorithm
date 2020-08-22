var ray = [3,4,1,13,43,6,32,2];
console.log(ray);
console.log(SelectionSort(ray));

function SelectionSort(arr){
    for(var i = 0; i<arr.length;i++){
        var min = i;
        for(var j = i+1;j<arr.length; j++){
            if(arr[min]>arr[j]){
                min =  j;
            }
        }
        if(i!== min){
            [arr[min],arr[i]]=[arr[i],arr[min]];
        }
    }
    return arr;
}

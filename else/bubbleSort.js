var arr = [49,38,65,97,78,13,27];
function bubbleSort(arr){
	for(var i=0;i<arr.length;i++){
		for(var j=0;j<arr.length-i-1;j++){
			if(arr[j]>arr[j+1]){
				var temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			}
		}
	}
	return arr
}
var result = bubbleSort(arr)
console.log(result)
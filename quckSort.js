var arr = [49,38,65,97,78,13,27];
function quickSort(arr){
	if(arr.length<=1) return arr
	var mid = Math.floor(arr.length/2)
	var pivot = arr.splice(mid,1)[0]
	var left = []
	var right = []
	for(var i=0;i<arr.length;i++){
		if(arr[i]<=pivot){
			left.push(arr[i])
		}else{
			right.push(arr[i])
		}
	}
	return quickSort(left).concat([pivot],quickSort(right))
}
var result = bubbleSort(arr)
console.log(result)
function reqursiveBinarySearch(arr, item, leftIndex = 0,rightIndex= array.length) {
    if(leftIndex > rightIndex) {
    return null; 
    } else if (leftIndex <= rightIndex) {
        let halfSumIndex = (leftIndex + rightIndex) / 2;
        if(Array[halfSumIndex] = item) {
            return halfSumIndex; 
        } else if (Array[halfSumIndex] != item && Array[halfSumIndex] > item) {
            return reqursiveBinarySearch(Array, item, leftIndex, (halfSumIndex - 1)) 
        } else if (Array[halfSumIndex] < item) {
            return reqursiveBinarySearch(Array, item, (halfSumIndex + 1), rightIndex) 
        }
    }
};
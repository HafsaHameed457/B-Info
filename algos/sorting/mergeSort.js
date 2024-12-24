//Repeatedly divide an array into subarray until only one element remain in each array
// it means each array is sorted
//Now repeatedly merge subarays to produce new sorted array

const mergeSort=(arr)=>{
    if(arr.length===0||arr.length===1){
        return arr;
    }
    else{
        let leftArr=[...arr].splice(0,arr.length/2)
            let rightArr=[...arr].splice(leftArr.length,0)
            let sortedArr=[]
            let sortedLeft=mergeSort(leftArr),sortedRight=mergeSort(rightArr)
            while(sortedLeft.length!=0&&sortedRight.length!=0){
                if(sortedLeft[0]<sortedRight[0]){
                    sortedArr.push(sortedLeft[0])
                    sortedLeft.splice(0,1)
                }
                else{
                    sortedArr.push(sortedRight[0])
                    sortedLeft.splice(0,1)
                }
            }
            if(sortedLeft.length){
                sortedArr=[...sortedArr,sortedRight]
            }
            if(sortedRight.length){
                sortedArr=[...sortedArr,...sortedRight]
            }

return sortedArr;
             
        
    }
    
}

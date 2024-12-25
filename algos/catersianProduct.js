//Given 2 finite sets fine cartesian product
//Sets are represented as arrays in js

const cartesianProduct=(arr1,arr2)=>{
    let product=[]
    for(let i=0;i<arr1.length;i++){
        for(let j=0;i<arr2.length;i++){
            let newSet=[]
            if(arr1[i]<arr2[j]){

 newSet=[arr1[i],arr2[j]]
            }else{
 newSet=[arr2[j],arr1[i]]

            }


            product.push(newSet)
        
        }   
    }
return product;
}
console.log(cartesianProduct([1,2],[3,4]))

// Big O = O(n*m)

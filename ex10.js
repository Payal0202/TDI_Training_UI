let arr = []

arr.push(10,20,30,50,60)
arr.pop()
arr.splice(2,3,40)

arr1 = ["hello","byee"]
// console.log(arr[1])
console.log(arr)

let arr2 = arr1.map((element ) => {return element.charAt(0)})
arr2.forEach((e)=>{console.log(e)})

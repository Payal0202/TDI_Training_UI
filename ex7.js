function addnums(...nums){ 
    //rest parameters = variable args
    
    let sum=0
    for(let x of nums)
        sum = sum+x

    console.log(`sum=${sum}`)
        // return sum
}

addnums(1,2,3)
addnums()
addnums(3,5,6,7,8,9)
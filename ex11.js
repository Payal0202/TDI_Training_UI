function Greet(name, choice){
    if(choice == 1)
        return ()=>{console.log("Hello ",name)}
    if(choice == 2)
        return ()=>{console.log("Namaste ",name)}
    
    return ()=>{console.log("Konnichiwa",name)}
}

let v = Greet("payal",1)
v()

Greet("pari",3)()

v()
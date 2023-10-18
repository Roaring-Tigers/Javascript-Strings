// Lets take a string and print in in reverse way:  

// str = "hello"
// ans => olleh


let str = "hello" 
let str2=""

// for(let i = str.length-1; i>=0; i--){
//      str2 = str2 + str[i]
// }

// console.log(str2)


for(let i = 0; i<str.length; i++){
    str2 =  str[i] + str2  // 
}

console.log(str2)


for(let i = 0; i<str.length; i++){
    str2 =  str2 + str[str.length-1-i] // 
}

console.log(str2)
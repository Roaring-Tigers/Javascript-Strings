
// let str = "Abhishek"


// for(t of str){
//     if(t=="A" || t=="a" || t=="E" || t=="e" ||  t=="I" || t=="i" || t=="O" || t=="o" || t=="U" || t=="u"  ){
//         console.log(t)
//     }
// }


// let vowels = "aeiouAEIOU"

// for(t of str){
//      // t="A"
//      if(vowels.indexOf(t)>=0){
//             console.log(t)
//      }
// }

//Take a string and remove all duplicates (indexOf) 
// let str = "Tadadata"

// let newString= ""

// for(t of str){
//       if(newString.indexOf(t)==-1){
//             newString= newString+ t // Tadt
//       }
// }

// console.log(newString)





// Take a string and count number of times "e" is present (use the concept of 2nd parameter of indexOf)

let str = "Tetettteeetyue" 


for(i = 0; i<=str.length-1; ){
      let indexOfE = str.indexOf("e", i) // 1,3,7

      i = indexOfE +1 // 8

      console.log(indexOfE)
}
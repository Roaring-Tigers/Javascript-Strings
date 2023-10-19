
// let str = "Ram is dancing on the floor"

//  str = str + " " // "Ram is dancing on the floor "

// let word = ""
// for(let t of str){
//    if(t != " "){
//       word = word + t // floor
//    }
//    else{
//       console.log(word) // Ram, is ...  the
//        word = ""
//    }
// }

// console.log(word) // floor


let str = "   Ram    is    dancing   on   the  floor   "

 str = str + " " // "Ram is dancing on the floor "

let word = ""
for(let t of str){
   if(t != " "){
      word = word + t // floor
   }
   else if(word != ""){
      console.log(word) // Ram, is ...  the
       word = ""
   }
}
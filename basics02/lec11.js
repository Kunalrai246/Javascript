// const name="kunal"; it is first way of declaring of string
// the second way is the
// const gamename=new String("kunal-rai") 
// it is second way
//  when we concinate 2 string using + it is not good practice so we use backticks method
// const name="kunal"
// const friendname="neelssh"
// console.log(`my name is ${name} and my friend name is ${friendname}`)
const gamename=new String("kunal-rai") 
console.log(gamename[0])
console.log(gamename.length)
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2)) // kis index pe kaun sa char hai// number pass//
console.log(gamename.indexOf('u')); //kaun se char kis index pe hai//
const newstring=gamename.substring(0,4)
console.log(newstring)
const anotherstring=gamename.slice(-8,8)
console.log(anotherstring)

// / trim method remove starting and end space//
// const newStringOne="    NEELESH   "  //last ke and starting ke space nahi chahiye///
// console.log(newStringOne);
// console.log(newStringOne.trim());


// // REPLACE//
// const url="https://neelesh.com/neelesh%20kumar"
// console.log(url.replace('%20','-'))

// console.log(url.includes('neeelsh')) // koi chiz hai ki nahi//

// // spilt based on conditon//

// console.log(gamename.split('-')); // convert into array 2 string seperated by commas//



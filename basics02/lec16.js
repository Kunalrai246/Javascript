// object ko declare krne k 2 way hote h one is literals and one is constructur
Object.create
// /concept of singleton//
//singleton ka matlab koi bhi constructor se aap banate hai to singleton object banta hai(it means yani ek hi object hai)
//jab bbhi hum literals ki tarah declare karte hai to singleton nhi banta hai//
//constructor se banega to hamesa singleton bnega//
// singlton

// object.create

// ///symbol declare//
// //interview ques--ek symbol lo object key me add kro and print karke dikha do//
// console.log(jsUser.mysymbol); // but iska datatype string hai hame symbole ki tarah use karna tha to ek tarila use sqare bracket-->[mysym]
// console.log(jsUser[mysymbol]); // is tarah sybol ko print karana hai//
// object literals
// ye jo bhi hm kr rhe h object literals hain
const mysm=Symbol("key1")
const jsuser={
    name:"kunal",
    [mysm]:"mykey1",
    age:18,
    email:"kunal9695@gmail.com",
    location:"azamgarh"
}
// there are two way to access in the object
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(typeof jsuser[mysm])

// if you want to freeze the object then no one can change in ur object
Object.freeze(jsuser)

// jsUser.greeting=function(){
//     console.log("hello js user");
// }
// console.log(jsUser.greeting);// function anonymus//function not execute only refer//
// console.log(jsUser.greeting()); // a gya output

// jsUser.greetingtwo=function(){
//     console.log(`hello js user,${this.name}`); // same object ko reference//use this keyword//
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greetingtwo());

// object lec 17
//how object declare through singletoon and constructor//

// const tinderusers=new Object() // ye ek singleton object hai//
// const tinderuser={} // non singleton object//
const tinderuser={}
tinderuser.id="123ac"
tinderuser.name="kunal"
tinderuser.islogin=false
console.log(tinderuser);
// aise nested object bhi bnaa skte ho aur dot operator ka use krk access bhi krskte ho
// const regulareuse={
//     email:"neelesh18903@gmail.com",
//     fullname:{
//         userfullname:{
//             fname:"hitesh",
//             lname:"kumar"
//         }
//     }
// }
// console.log(regulareuse.fullname.userfullname.fname);

// how object combine// through assign
// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// const obj3={5:"e",6:"f"}
// // const obj3={obj1,obj2}
// // console.log(obj3);// same array wali problem hame aise nhi merge karna hai//
// // const obj3=Object.assign(obj1,obj2); // ek aur way optinal parameter//
// // const obj4=Object.assign({},obj1,obj2,obj3) // jitni value hogi sb combine ho jayegi// ek target ek source//
// // console.log(obj4);

// const obj4={...obj1,...obj2,...obj3}//spread//
// console.log(obj4);

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));//in sab ka datatypr array hai//
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser)); //har ek key value pair ko array bana dia jata hai//
// //value not exist so ask//
// console.log(tinderuser.hasOwnProperty('isLoggedin'));
// jo data h vo memory me kis tarike se store hote h aur aap kis tarike se data ko access kr skte
//  iss basis pe datatype ka categorization kiya gya hai
// JS dynamically or staticalyy type languag kon si hain?--dynamically ye runtime me khud declare krti h kis type k datatype hai//
// In Typescript--const score:number=100 yaha batana padta hai type script me batana pdta h uska datatype//
// 1.primitive ->string,boolean,bigint,null,undefined,number

    const score=100 
    const scoreid=100.3 
    // it both treated as same number datatype in js decimal number and without decimal no. are treat as same
    const id=symbol('123')
    const anotherid=symbol('123')
    // it not same 
    
    const bignumber=1234567899874512n
    // bigint datatype jb bhi use kro last me n laga do

// 2. non premptive->array ,object ,function
const heros=["shaktiman","naagraaj","dogo"]; // array square bracket and value give //
// curly braces ke andr object in key value pair,curly braces k andr koi cheej use kroge to to object treat hogi//
let myobj={
    name:"Neelesh",
    age:22
}
const myfunction=function(){
    console.log("hello world");
}

// how kisi bhi value ka datatype pata kaie kare//
console.log(typeof myobj);

// kon sa datatype kya return krta hain
// NOTE//
//Number=>number
//String=>string
//Boolean=>boolean
//null=>object
//undefined=>undefined
//Symbol=>symbol
//BigInt=bigint

//all non PD
//Array=>objec
//Function=>function(object function)
//Object=>object
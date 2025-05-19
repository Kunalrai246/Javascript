const score=300
console.log(score)
const balance=new Number(400)
console.log(balance)
// ye ek way h jisse aap isko number chahe aur data type me change kr skte ho
console.log(balance.toString().length)
console.log(balance.toFixed(3))
// tostring()me aap kisi no. ko string me bdl skte ho
// tofixed() me aap kitne value pe aap fix chahte ho ye gst me use hota h jb aap recipt dete ho

const num=123.758
console.log(num.toPrecision(2));


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// *****maths*****
// console.log(Math);
// console.log(Math.abs(-4)); // absolute value -4 to +4
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));
// console.log(Math.sqrt(25));
// console.log(Math.min(4,5,6));
// console.log(Math.max(4,5,6));

// console.log(Math.random()); // hamesa value ayegi betwwen 0-1//
// console.log((Math.random()*10)+1); // for avoid min value 0 add 1// 0.04 n aye
// const min=10;
// const max=20;
// console.log(Math.floor(Math.random()*(max-min+1))+min);

// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10)+1);
const min=5
const max=30
console.log(Math.floor(Math.random()*(max-min+1))+min);

//******Memaory *///
//Stack Meamory uesed byPrimitive datatype)-->when stack meamory used it means jo bhi variable declared kiya uski copy milti hai
// alag alag copy banegi jb bhi value change hogi
//Heap Meamory used by Non primitive datatype//-->when variable or object define in heap then refernece (original v me change)
// heap memory vha use hogi jaha non premptive datatype hoge memory direct heap me assign hogi aur jo bhi variable hoga vo stack 
// memory se usko reference krega agr khuch bhi change hota h to actual value change hogi

let myyoutubename="Neelesh Kumar"
let anothername=myyoutubename
anothername="shubham"
console.log(anothername);
console.log(myyoutubename);

let userone={
    email:"neelesh18903@gmail.com",
    upid:"usert@ybl"
}
let usertwo=userone
usertwo.email="shubham123@gmail.com"
console.log(userone.email);
console.log(usertwo.email);
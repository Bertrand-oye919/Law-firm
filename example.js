const title ="Welcome to";
const heading =document.getElementById("heading");

let count = 0;
let interval = setInterval(()=>{
    if( count ==title.length){
        count =0;
        heading.innerText ="";
    }else{
        heading.innerText += title[count];
        count++
    }
},200)
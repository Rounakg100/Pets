const menulist=document.querySelector(".menu-list");
const closebtn=document.querySelector(".close-btn");
const menubtn=document.querySelector(".menu-btn");
menubtn.onclick =()=>{
    menulist.classList.add("active");
    menubtn.classList.add("hide");
    closebtn.classList.remove("hide");
}
closebtn.onclick =()=>{
    menulist.classList.remove("active");
    menubtn.classList.remove("hide");
    closebtn.classList.add("hide");
}
var v1=setInterval(counter1, 5);
var v2=setInterval(counter2, 5);
var v3=setInterval(counter3, 5);
 let count1=0;
 let count2=0;
 let count3=0;
function counter1(){
    count1++;
    document.querySelector("#s-1").innerHTML="+ "+count1;
    if(count1==34793){
        clearInterval(v1)
    }
}
function counter2(){
    count2++;
    document.querySelector("#s-2").innerHTML="+ "+count2;
    if(count2==45382){
        clearInterval(v2)
    }
}
function counter3(){
    count3++;
    document.querySelector("#s-3").innerHTML="+ " + count3;
    if(count3==54762){
        clearInterval(v3)
    }
}
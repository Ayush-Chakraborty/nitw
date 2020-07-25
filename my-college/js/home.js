var mainImage=document.getElementById("first_img");
var on=true;
var i=0;
var timer=null;
function rotate(){
    i++;
    mainImage.setAttribute("style",`transform:rotateY(${i}deg);`);
}
function reset_img(){
    mainImage.setAttribute("style","transform:rotateY(0deg);");
    i=0;
}
function change_state(){
    if(on){
        timer=setInterval(rotate,50);
        on=false;
    }
    else{
        clearInterval(timer);
        reset_img();
        on=true;
    }
}

// var timer=setInterval(rotate,50);

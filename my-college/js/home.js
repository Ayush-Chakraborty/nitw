var mainImage=document.getElementById("first_img");
var on=true;
var i=0;
var timer=null;
function rotate(){
    if(i>10**10)
        i=0;
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
var header=document.getElementsByTagName("header")[0];
function change_index(){
    if(window.scrollY>0)
        header.style.zIndex='1';
    else
        header.style.zIndex='0';
}
window.addEventListener("scroll",change_index);

var sections=document.getElementsByClassName('between_section');
function change_visibility(){

    for(var i=0;i<sections.length;i++){
        if (window.innerHeight+window.scrollY>sections[i].offsetTop+200){
            sections[i].setAttribute("style","transform:translateY(0px)");
            sections[i].style.opacity = '1';
        }
        else{
            sections[i].setAttribute("style","transform:translateY(100px)");
            sections[i].style.opacity = '0';
        }
    }
}
window.addEventListener("scroll",change_visibility);
function scrollToTop(){
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
}

const leftButton=document.querySelector('.left');
const rightButton=document.querySelector('.right');
const imgs=document.querySelectorAll('.carousel img');
const imgWidth=imgs[0].offsetWidth;
const navButtons=Array.from(document.getElementsByClassName('carousel-nav-button'));
const spans=document.querySelectorAll('.text span');
imgs.forEach((item,index)=>{
    item.style.left=`${index*imgWidth}px`;
})
function transformLeft(){
    imgs.forEach((item)=>{
        item.style.left=`${Number(item.style.left.split('p')[0])-imgWidth}px`;
    });
}
function transformRight(){
    imgs.forEach((item)=>{
        item.style.left=`${Number(item.style.left.split('p')[0])+imgWidth}px`;
    });
}
function buttonVisibility(currImage){
    if (currImage===0){
        leftButton.style.visibility="hidden";
        rightButton.style.visibility="visible";
    }
    else if(currImage===imgs.length-1){
        leftButton.style.visibility="visible";
        rightButton.style.visibility="hidden";
    }
    else{
        leftButton.style.visibility="visible";
        rightButton.style.visibility="visible";
    }
}
var currImage=0;
leftButton.style.visibility="hidden";
rightButton.style.visibility="visible";
leftButton.addEventListener('click',()=>{
    if (currImage<=0) return;
    transformRight();
    currImage--;
    buttonVisibility(currImage);
    navButtons[currImage].classList.add('active-nav');
    navButtons[currImage+1].classList.remove('active-nav');
    spans[currImage].classList.add('active-span');
    spans[currImage+1].classList.remove('active-span');
});

rightButton.addEventListener('click',()=>{
    if (currImage>=imgs.length-1) return;
    transformLeft();
    currImage++;
    buttonVisibility(currImage);
    navButtons[currImage].classList.add('active-nav');
    navButtons[currImage-1].classList.remove('active-nav');
    spans[currImage].classList.add('active-span');
    spans[currImage-1].classList.remove('active-span');
});
var targetIndex=null;
var targetButton=null;
var cnt=0;
const navBar=document.querySelector('.carousel-nav');
navBar.addEventListener('click',(e)=>{
    targetButton=e.target.closest('button');
    if (!targetButton) return;
    for(var i=0;i<navButtons.length;i++)
    {
        if(navButtons[i]===targetButton)
        {
            targetIndex=i;
            break;
        }
    }
    if (targetIndex===currImage) return;
    else if(targetIndex>currImage)
    {
        cnt=targetIndex-currImage;
        while(cnt--)
        {
            transformLeft();
        }
    }
    else{
        cnt=currImage-targetIndex;
        while(cnt--)
        {
            transformRight();
        }
    }
    navButtons[targetIndex].classList.add('active-nav');
    navButtons[currImage].classList.remove('active-nav');
    spans[targetIndex].classList.add('active-span');
    spans[currImage].classList.remove('active-span');
    currImage=targetIndex;
    buttonVisibility(currImage);
});

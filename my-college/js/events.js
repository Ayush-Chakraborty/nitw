const scrollElements=document.getElementsByClassName('scroll');
const parallaxContainer=document.getElementById("parallax");
var pos=0;
var scrollParentHeight=0;
var scrollChildHeight=0;
var windowScroll=0;
function parallaxEffect(){
    for(var i = 0;i<scrollElements.length;i++)
    {
        scrollChildHeight = scrollElements[i].getBoundingClientRect()["bottom"];
        scrollParentHeight = parallaxContainer.getBoundingClientRect()["bottom"];
        windowScroll=window.pageYOffset;
        pos=windowScroll*scrollElements[i].dataset.rate;
        if (scrollParentHeight > scrollChildHeight +pos-70)
        {
            scrollElements[i].style.transform=`translateY(${pos}px)`;
        }
    }
}
var y1=0;
var y2=0;
var diff=0;
function resizePosition(){
    y1=scrollElements[1].getBoundingClientRect()["bottom"];
    y2=parallaxContainer.getBoundingClientRect()["bottom"]; 
    diff=Number(scrollElements[1].style.transform.split('(')[1].split('p')[0]);
    if(y2<y1)
        scrollElements[1].style.transform=`translateY(${diff+y2-y1}px)`;
}

// var figures=document.querySelectorAll("figure");
var prevFig=null;
var prevWidth=0;
var prevMaxWidth=0;
var prevMaxHeight="calc(calc(100vh - 160px) / 4.2)";
const prevZIndex="0";
var prevBoxShadow="black 4px 4px 5px 1px";
var prevTransform=null;
var changed=false;
function figureInFocus(el)
{
    if (!changed)
    {
        prevFig=el;
        if (window.innerWidth < 900)
        {
            if (el.classList.value == "tall")
                prevMaxWidth="120px";
            else
                prevMaxWidth="160px";
        }
        else{
            if (el.classList.value == "tall")
                prevMaxWidth="150px";
            else
                prevMaxWidth="250px";
        }
        prevWidth=el.width;
        prevTransform=el.style.transform;
        el.style.maxHeight="calc(100vh - 100px)";
        el.style.maxWidth="calc(100vw - 100px)";
        el.style.width="70vw";
        el.style.zIndex="2";
        el.style.boxShadow="rgba(0,0,0,0.6) 10px 10px 10px 50px";
        el.style.position="fixed";
        el.style.top="50%";
        el.style.left="50%";
        el.style.transform='translate(-50%,-50%)';
        changed=true;
    }
    else{
        prevFig.style.maxHeight=prevMaxHeight;
        prevFig.style.maxWidth=prevMaxWidth;
        prevFig.style.width=prevWidth.toString()+'px';
        prevFig.style.zIndex=prevZIndex;
        prevFig.style.boxShadow=prevBoxShadow;
        prevFig.style.transform=prevTransform;
        prevFig.style.position="static";
        changed=false;
    }
}

var snapScrollEl=document.getElementById('cse');
function snapScroll(){
    if(snapScrollEl.getBoundingClientRect()['y'] + 10 < window.innerHeight)
        window.scrollTo(0,window.innerHeight);
}
const lastSection=document.getElementById('last');
const footer =document.getElementsByTagName('footer')[0];
lastSection.style.height=`calc(100vh - 70px - ${footer.offsetHeight}px)`;
var lastImages=document.querySelectorAll("#last img");
var margin_=(lastSection.offsetHeight/2 -  lastImages[0].height)/2;
lastImages[0].style.margin=`${margin_}px 10px`;
lastImages[1].style.margin=`${margin_}px 10px`;
 var spans=document.querySelectorAll('#last span');
 spans[0].style.top=`${(lastSection.offsetHeight/2 - spans[0].offsetHeight)/2}px`;
 spans[1].style.top=`${(lastSection.offsetHeight/2 - spans[1].offsetHeight)/2}px`;

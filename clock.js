function change(){
    var colorcode='';
    var x=document.getElementsByClassName("outerframe")[0];
    var lists=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    
   
    for(var i=1;i<=6;i++)
        {
            var z=Math.random()*15;
            var y=lists[Math.floor(z)];
            colorcode=colorcode+y;
        }
    colorcode='#'+colorcode;
    
    x.style.backgroundColor=colorcode;
    document.getElementById("hrs").style.backgroundColor=colorcode;
    document.getElementById("mins").style.backgroundColor=colorcode;
}

var eg = setInterval(check,1000);
function check()
{   var obj=new Date();
    var sec,min,hr;
    sec = obj.getSeconds();
    min=obj.getMinutes();
    hr=obj.getHours();
    if(hr>=12)hr=hr-12;
    sec=sec*6;
    min=min*6;
    hr=hr*30;
    set(sec,min,hr);
}



function set(sec,min,hr){
    
   
   document.getElementById("secs").style.transform="rotate(" + sec + "deg)"
   document.getElementById("mins").style.transform="rotate(" + min + "deg)"
   document.getElementById("hrs").style.transform="rotate(" + hr + "deg)"
   
}



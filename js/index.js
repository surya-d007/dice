var ran_1 = Math.floor((Math.random()*6)+1);
var ran_2 = Math.floor((Math.random()*6)+1);
 
var scr_1 = "images/z_"+ran_1+".png";
var scr_2 = "images/z_"+ran_2+".png";

var img1 =document.querySelectorAll("img")[0];
var img2 =document.querySelectorAll("img")[1];

img1.setAttribute("src",scr_1);
img2.setAttribute("src",scr_2);

var txt = document.querySelector("h1");

if(ran_1>ran_2)
{
    txt.innerHTML="Player 1 WON !";
}
else if(ran_1<ran_2)
{
    txt.innerHTML="Player 2 WON !";
}
else if(ran_1==ran_2)
{
    txt.innerHTML="Draw . try again !";
}





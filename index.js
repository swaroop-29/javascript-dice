var randomNumber1=Math.floor((Math.random()*6)+1);
var dice1=document.querySelector(".dice .img1");
var r1="images/dice"+randomNumber1+".png";
dice1.setAttribute("src",r1);


var randomNumber2=Math.floor((Math.random()*6)+1);
var dice2=document.querySelector(".dice .img2");
var r2="images/dice"+randomNumber2+".png";
dice2.setAttribute("src",r2);

var heading=document.querySelector("h1");
if(randomNumber1>randomNumber2)
{
	heading.textContent="🚩 Player 1 wins";

}
else if(randomNumber1==randomNumber2)
{
	heading.textContent="Draw";
	
}
else
{
	heading.textContent="Player 2 wins 🚩";
	
}
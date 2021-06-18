
//For Dice 1

var ran1=Math.random();
ran1=ran1*6;
ran1=Math.floor(ran1)+1;
var ranimage1="dice"+ran1+".png";
var ransource1="images/"+ranimage1;
document.querySelector(".img1").setAttribute("src",ransource1)

//For Dice 2

var ran2=Math.random();
ran2=ran2*6;
ran2=Math.floor(ran2)+1;
var ranimage2="dice"+ran2+".png";
var ransource2="images/"+ranimage2;
document.querySelector(".img2").setAttribute("src",ransource2)

if(ran1===ran2)
{
    document.querySelector("h1").innerHTML="It's a tie!";
}
else if(ran1>ran2)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
    
}
else if(ran1<ran2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
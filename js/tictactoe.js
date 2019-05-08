var turn=document.getElementById("turn"),boxes=document.querySelectorAll("#main div"),XO=0,inProgress=true;function WinnerLine(b1,b2,b3){alert("Wygrywa: "+b1.innerHTML);b1.classList.add("win");b2.classList.add("win");b3.classList.add("win");inProgress=false;turn.innerHTML="Wygrał gracz: "+b1.innerHTML;}
function getWinner(){var box1=document.getElementById("box1"),box2=document.getElementById("box2"),box3=document.getElementById("box3"),box4=document.getElementById("box4"),box5=document.getElementById("box5"),box6=document.getElementById("box6"),box7=document.getElementById("box7"),box8=document.getElementById("box8"),box9=document.getElementById("box9");if(box1.innerHTML!==""&&box1.innerHTML===box2.innerHTML&&box1.innerHTML===box3.innerHTML)
WinnerLine(box1,box2,box3);if(box4.innerHTML!==""&&box4.innerHTML===box5.innerHTML&&box4.innerHTML===box6.innerHTML)
WinnerLine(box4,box5,box6);if(box7.innerHTML!==""&&box7.innerHTML===box8.innerHTML&&box7.innerHTML===box9.innerHTML)
WinnerLine(box7,box8,box9);if(box1.innerHTML!==""&&box1.innerHTML===box4.innerHTML&&box1.innerHTML===box7.innerHTML)
WinnerLine(box1,box4,box7);if(box2.innerHTML!==""&&box2.innerHTML===box5.innerHTML&&box2.innerHTML===box8.innerHTML)
WinnerLine(box2,box5,box8);if(box3.innerHTML!==""&&box3.innerHTML===box6.innerHTML&&box3.innerHTML===box9.innerHTML)
WinnerLine(box3,box6,box9);if(box1.innerHTML!==""&&box1.innerHTML===box5.innerHTML&&box1.innerHTML===box9.innerHTML)
WinnerLine(box1,box5,box9);if(box3.innerHTML!==""&&box3.innerHTML===box5.innerHTML&&box3.innerHTML===box7.innerHTML)
WinnerLine(box3,box5,box7);}
for(var i=0;i<boxes.length;i++){boxes[i].onclick=function(){if(this.innerHTML!=="X"&&this.innerHTML!=="O"&&inProgress){if(XO%2===0){this.innerHTML="X";turn.innerHTML="Tura gracza 'O'";getWinner();XO+=1;}else{this.innerHTML="O";turn.innerHTML="Tura gracza 'X'";getWinner();XO+=1;}}};}
function replay(){for(var i=0;i<boxes.length;i++){boxes[i].classList.remove("win");boxes[i].innerHTML="";turn.innerHTML="Tic Tac Toe";inProgress=true;}}

$('.page.zad1').show();$('.page-link').click(function(){$('.page').hide();$('.page.'+this.dataset.page).show();})
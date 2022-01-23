"use strict";

var name="" , welcomingMessag="",age="",gender ="",msORmr="";
name=prompt("please enter your name : ");
var gender=prompt("please enter your gender (male / female) : ");
if(((gender.toLowerCase()=="male")||(gender.toLowerCase()=="female")))
{
  (gender.toLowerCase()=="male")?msORmr="Mr":msORmr="Ms";
   age=prompt("please enter your age : ") ;
  if(age<=0){
    alert("you didn't enter your correct age .\n it must be more than zero ");
  }
  else{
    welcomingMessag=confirm("do you want to see  welcoming message. ");
    if(welcomingMessag==true){
      alert("welcom "+msORmr+" "+  name );
    }
}
}
else{
  (gender.toLowerCase()=="male")?msORmr="Mr":msORmr="Ms";
  age=prompt("please enter your age : ") ;
 if(age<=0){
   alert("you didn't enter your correct age .\n it must be more than zero ");
 }
 else{
   welcomingMessag=confirm("do you want to see  welcoming message. ");
   if(welcomingMessag==true){
     alert("welcom "+  name );
   }
  
}
}


// task 3

let answerQuestions=[];//task 6 sunday 1/23/2022
let Questions=["Are you happy using this site ? ","Will you use this site in your daily life? ","Do you have suggestions to develop further? "];
for(let i=0;i<3;i++){

do{
  answerQuestions[i]=prompt(Questions[i]);
if((answerQuestions[i]=="yes")||(answerQuestions[i]=="no"))break;
else{alert("invalid");}
}while(answerQuestions[i]=="")
console.log(answerQuestions[i]);
}




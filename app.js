"use strict";
let answerQuestions=[];//task 6 sunday 1/23/2022
let Questions=[" q1 \n Are you happy using this site ? "," q2 \n Will you use this site in your daily life? "," q3 \n Do you have suggestions to develop further? "]; 
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
//Question1
function q1 () {
  
    do{
      answerQuestions[0]=prompt(Questions[0]);
    if((answerQuestions[0]=="yes")||(answerQuestions[0]=="no"))break;
    else{alert("invalid");}
    }while(answerQuestions[0]=="")
    console.log(answerQuestions[0]);
    
}
//Question2
function q2 () {
  
    do{
      answerQuestions[1]=prompt(Questions[1]);
    if((answerQuestions[1]=="yes")||(answerQuestions[1]=="no"))break;
    else{alert("invalid");}
    }while(answerQuestions[1]=="")
    console.log(answerQuestions[1]);
    
}
//Question3
function q3 () {
  
    do{
      answerQuestions[2]=prompt(Questions[2]);
    if((answerQuestions[2]=="yes")||(answerQuestions[2]=="no"))break;
    else{alert("invalid");}
    }while(answerQuestions[2]=="")
    console.log(answerQuestions[2]);
   
}
// task 6


q1(answerQuestions[0],Questions[0]);
q2(answerQuestions[1],Questions[1]);
q3(answerQuestions[2],Questions[2]);

//this is without function
/*
for(let i=0;i<3;i++){
do{
  answerQuestions[i]=prompt(Questions[i]);
if((answerQuestions[i]=="yes")||(answerQuestions[i]=="no"))break;
else{alert("invalid");}
}while(answerQuestions[i]=="")
console.log(answerQuestions[i]);
}*/




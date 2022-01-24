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
function q0() {
  let testAN=prompt(Questions[0]);
  while((testAN!="yes")&&(testAN!="no")){
    alert("invalid");
   testAN=prompt(Questions[0]);
  }
  answerQuestions[0]=testAN;
  //console.log(answerQuestions[0]); 
}
//Question2
function q1 () {
  let testAN=prompt(Questions[1]);
  while((testAN!="yes")&&(testAN!="no")){
    alert("invalid");
   testAN=prompt(Questions[1]);
  }
  answerQuestions[1]=testAN;
 // console.log(answerQuestions[1]); 
}
//Question3
function q2 () {
  let testAN=prompt(Questions[2]);
  while((testAN!="yes")&&(testAN!="no")){
    alert("invalid");
   testAN=prompt(Questions[2]);
  }
  answerQuestions[2]=testAN;
  //console.log(answerQuestions[2]); 
}
// task 6

q0();
q1();
q2();
for(let i=0;i<answerQuestions.length;i++){
  console.log(answerQuestions[i]);
}

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




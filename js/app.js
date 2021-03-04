'use strict';
let counter=0;
confirm('Lets see how well you know me\n answer these simple questions');
let userName=prompt('What is your name dear');
let answers;
function greetings(name){
  return alert('greetings ' + name +' hope you are well today');
}
greetings(userName);
alert('answer with y or no');
function birthGuess(answ){
  answ=prompt('Were I born in Zaqra').toLowerCase();
  if(answ==='y' || answ==='yes'){
    alert('correct good job');
    counter+=1;
    // console.log('correct good job')  
  }else {
    alert('wrong answer');
  }
  answ=prompt('Am I 24 years old').toLowerCase();
  if(answ==='y' || answ==='yes'){
    alert('correct good job');
    counter+=1;
  }else {
    alert('wrong answer');
  }
  answ=prompt('Am I a short guy').toLowerCase();
  if(answ==='y' || answ==='yes'){
    alert('correct good job');
    counter+=1;
  }else {
    alert('wrong answer');
  }
  answ=prompt('Am I smart').toLowerCase();
  if(answ==='y' || answ==='yes'){
    alert('correct good job');
    counter+=1;
  }else {
    alert('wrong answer');
  }
  answ=prompt('Am I into quantum phyics').toLowerCase();
  if(answ==='y' || answ==='yes'){
    alert('correct good job');
    counter+=1;
  }else {
    alert('wrong answer');
  }
  return alert('you got '+ counter +' out of 5');
}
birthGuess(answers);
let randomNumber = Math.floor(Math.random() * 101);
let x;
let userHint=['too high', 'too low', 'out of attempts'];
let userNumber;
function randomFxn (b){
  alert('guess a number between \n 0-100');
  let guessCount=4;
  for (let i =0;i<4;i++){
    x=parseInt(prompt(' guess a number between \n 0-100' ));
    if(x<randomNumber){
      alert(userHint[1]);
    }
    if(userNumber>randomNumber){
      alert(userHint[0]);
    }
    if(userNumber===randomNumber){
      alert('Good gues you got it');
      counter+=1;
      break;
    }
    if(guessCount===1){
      alert(userHint[2]);
    }
    guessCount--;
    alert('trial left : ' + guessCount);
  }
}
randomFxn(x);
let possibleCauses=['neutron energy', 'type of reaction', 'target energy'];
let userGuess;
let trials;
function nuclearCauses(cross){
  for (let i =1;i<=6;i++){
    cross=prompt('guess a factor that affects the probability of \n nuclear rxn');
    for (let j =0;j<3;j++){
      trials=i;
      if (cross===possibleCauses[j]) {
        j=6;
        counter+=1;
        i=7;
        alert('good guess '+possibleCauses+' are all correct');
        break;
      }
    }
    alert('trial sofar : ' + trials);
  }
}
nuclearCauses(userGuess);
alert('you got '+ counter +' out of 7');

'use strict';

var chooseHowManyRounds = 25;
var uniqueIndexArray = [];
var allBusMall = [];
var parentE = document.getElementById('mallImgs');
var totalVotes = 0;
var names = [];
var vote = [];


function Data(name, extension){
  this.filepath = `img/${name}${extension}`;
  this.alt = name;
  this.title = name;
  this.votes = 0;
  this.views = 0;
  allBusMall.push(this);
}

Data.prototype.render = function(){

  var imgElement = document.createElement('img');
  imgElement.src = this.filepath;
  imgElement.alt = this.alt;
  imgElement.title = this.title;
  parentE.appendChild(imgElement);
};

new Data('bag', '.jpg');
new Data('bathroom', '.jpg');
new Data('banana', '.jpg');
new Data('boots', '.jpg');
new Data('breakfast', '.jpg');
new Data('bubblegum', '.jpg');
new Data('chair', '.jpg');
new Data('cthulhu', '.jpg');
new Data('dog-duck', '.jpg');
new Data('dragon', '.jpg');
new Data('pen', '.jpg');
new Data('pet-sweep', '.jpg');
new Data('scissors', '.jpg');
new Data('shark', '.jpg');
new Data('sweep', '.png');
new Data('tauntaun', '.jpg');
new Data('unicorn', '.jpg');
new Data('usb', '.gif');
new Data('water-can', '.jpg');
new Data('wine-glass', '.jpg');


function randomIndex(){
  var index = randomNumber(allBusMall.length);

  while(uniqueIndexArray.includes(index)){
    index = randomNumber(allBusMall.length);
  }
  uniqueIndexArray.push(index);

  if(uniqueIndexArray.length > 6){
    uniqueIndexArray.shift();
  }
  return index;
}

function randomNumber(max){
  return Math.floor(Math.random() * max);
}

function displayImg(){
  var index = randomIndex();
  allBusMall[index].render();
}

function handleClick(event){
  parentE.textContent = '';


  var imgClickedOn = event.target.title;


  for(var i=0; i<allBusMall.length; i++){
    if(imgClickedOn === allBusMall[i].title){

      allBusMall[i].vote++;
      totalVotes++;

      if(totalVotes === chooseHowManyRounds){
        parentE.removeEventListener('click', handleClick);
        makeNamesArray();
      }
    }
  }

  displayImg();
  displayImg();
  displayImg();
}

displayImg();
displayImg();
displayImg();

parentE.addEventListener('click', handleClick);


function makeNamesArray(){
  for(var i=0; i<allBusMall.length; i++){
    names.push(allBusMall[i].title);
    vote.push(allBusMall[i].vote);
  }

  generateChart();
}

'use strict'

var chooseHowManyRounds = 25
var uniqueIndexArray = [];
var allBusMall = [];
var parent = document.getElementById('mallImgs');
var totalVotes = 0;
var names = [];
var vote = [];


function data(name, extension){
  this.filepath = `img/${name}${extension}`;
  this.alt = name;
  this.title = name;
  this.votes = 0;
  this.views = 0;
  allBusMall.push(this);
}

data.prototype.render = function(){

  var imgElement = document.createElement('img');
  imgElement.src = this.filepath;
  imgElement.alt = this.alt;
  imgElement.title = this.title;
  parent.appendChild(imgElement);
}

new data('bag', '.jpg');
new data('bathroom', '.jpg');
new data('banana', '.jpg');
new data('boots', '.jpg');
new data('breakfast', '.jpg');
new data('bubblegum', '.jpg');
new data('chair', '.jpg');
new data('cthulhu', '.jpg');
new data('dog-duck', '.jpg');
new data('dragon', '.jpg');
new data('pen', '.jpg');
new data('pet-sweep', '.jpg');
new data('scissors', '.jpg');
new data('shark', '.jpg');
new data('sweep', '.png');
new data('tauntaun', '.jpg');
new data('unicorn', '.jpg');
new data('usb', '.gif');
new data('water-can', '.jpg');
new data('wine-glass', '.jpg');


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
    parent.textContent = '';
  

    var imgClickedOn = event.target.title;
  

    for(var i=0; i<allBusMall.length; i++){
      if(imgClickedOn === allBusMall[i].title){

        allBusMall[i].vote++;
        totalVotes++;
  
        if(totalVotes === chooseHowManyRounds){
          parent.removeEventListener('click', handleClick);
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
  
  parent.addEventListener('click', handleClick);
  

  function makeNamesArray(){
    for(var i=0; i<allBusMall.length; i++){
      names.push(allBusMall[i].title);
      vote.push(allBusMall[i].vote);
    }

generateChart();
}

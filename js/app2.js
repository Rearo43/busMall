'use strict';

var chooseHowManyRounds = 20;
var uniqueIndexArray = [];
var allBusMall = [];
var parentE = document.getElementById('mallImgs');
var totalVotes;
var names = [];
var votes = [];
var views = [];


function Data(name, extension, varVotes, varViews){
  this.filepath = `img/${name}${extension}`;
  this.alt = name;
  this.title = name;
  this.votes = varVotes;
  this.views = varViews;
  this.end = extension;
  allBusMall.push(this);
}

Data.prototype.render = function(){

  var imgElement = document.createElement('img');
  imgElement.src = this.filepath;
  imgElement.alt = this.alt;
  imgElement.title = this.title;
  parentE.appendChild(imgElement);
};

function startUp(){
  // what ever LS has stored will not be found (null) or in check
  var check = localStorage.getItem('webData');

  if(check === null){
    new Data('bag', '.jpg', 0, 0);
    new Data('bathroom', '.jpg', 0, 0);
    new Data('banana', '.jpg', 0, 0);
    new Data('boots', '.jpg', 0, 0);
    new Data('breakfast', '.jpg', 0, 0);
    new Data('bubblegum', '.jpg', 0, 0);
    new Data('chair', '.jpg', 0, 0);
    new Data('cthulhu', '.jpg', 0, 0);
    new Data('dog-duck', '.jpg', 0, 0);
    new Data('dragon', '.jpg', 0, 0);
    new Data('pen', '.jpg', 0, 0);
    new Data('pet-sweep', '.jpg', 0, 0);
    new Data('scissors', '.jpg', 0, 0);
    new Data('shark', '.jpg', 0, 0);
    new Data('sweep', '.png', 0, 0);
    new Data('tauntaun', '.jpg', 0, 0);
    new Data('unicorn', '.jpg', 0, 0);
    new Data('usb', '.gif', 0, 0);
    new Data('water-can', '.jpg', 0, 0);
    new Data('wine-glass', '.jpg', 0, 0);

  }else{
    check = JSON.parse(check);
    console.log(check);

    for(var i = 0; i < check.length; i++){
      var storageData = check[i];
      var storeName = storageData.title;
      var storeEnd = storageData.end;
      var storeVotes = storageData.votes;
      var storeViews = storageData.views;

      new Data(storeName, storeEnd, storeVotes, storeViews);
    }


  }
  var save = localStorage.getItem('storeTotalVotes');
  if(save === null){
    totalVotes = 0;

  }else{
    totalVotes = save;
  }


  displayImg();
  displayImg();
  displayImg();

  parentE.addEventListener('click', handleClick);
}

startUp();


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
  allBusMall[index].views++;
  allBusMall[index].render();
}

function handleClick(event){
  parentE.textContent = '';


  var imgClickedOn = event.target.title;


  for(var i=0; i<allBusMall.length; i++){
    if(imgClickedOn === allBusMall[i].title){

      allBusMall[i].votes++;
      totalVotes++;
    }
  }

  var pageData = JSON.stringify(allBusMall);
  localStorage.setItem('webData', pageData);

  localStorage.setItem('storeTotalVotes', totalVotes);


  if(totalVotes === chooseHowManyRounds){
    parentE.removeEventListener('click', handleClick);
    makeNamesArray();

    localStorage.removeItem('storeTotalVotes');
    
  }else{
    displayImg();
    displayImg();
    displayImg();

  }

}


function makeNamesArray(){
  for(var i=0; i<allBusMall.length; i++){
    names.push(allBusMall[i].title);
    votes.push(allBusMall[i].votes);
    views.push(allBusMall[i].views);
  }

  generateChart();
}



function generateChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: names,
      datasets: [{
        label: '# of Votes',
        data: votes,
        backgroundColor: [
          'rgba(154, 205, 50, 0.70)',
          'rgba(107, 142, 35, 0.70)',
          'rgba(124, 252, 0, 0.70)',
          'rgba(173, 255, 0, 0.70)',
          'rgba(0, 100, 0, 0.70)',
          'rgba(34, 139, 34, 0.70)',
          'rgba(0, 255, 0, 0.70)',
          'rgba(0, 250, 154, 0.70)',
          'rgba(60, 179, 113, 0.70)',
          'rgba(32, 178, 170, 0.70)',
          'rgba(47, 79, 79, 0.70)',
          'rgba(0, 139, 139, 0.70)',
          'rgba(0, 255, 255, 0.70)',
          'rgba(0, 191, 255, 0.70)',
          'rgba(30, 144, 255, 0.70)',
          'rgba(135, 206, 250, 0.70)',
          'rgba(0, 0, 205, 0.70)',
          'rgba(0, 0, 255, 0.70)',
          'rgba(0, 0, 139, 0.70)',
          'rgba(25, 25, 112, 0.70)',
        ],
        borderColor: [
          'rgba(154, 205, 50, 1)',
          'rgba(107, 142, 35, 1)',
          'rgba(124, 252, 0, 1)',
          'rgba(173, 255, 0, 1)',
          'rgba(0, 100, 0, 1)',
          'rgba(34, 139, 34, 1)',
          'rgba(0, 255, 0, 1)',
          'rgba(0, 250, 154, 1)',
          'rgba(60, 179, 113, 1)',
          'rgba(32, 178, 170, 1)',
          'rgba(47, 79, 79, 1)',
          'rgba(0, 139, 139, 1)',
          'rgba(0, 255, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(30, 144, 255, 1)',
          'rgba(135, 206, 250, 1)',
          'rgba(0, 0, 205, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 139, 1)',
          'rgba(25, 25, 112, 1)',
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: views,
        backgroundColor: [
          'rgba(154, 205, 0.30)',
          'rgba(107, 142, 35, 0.30)',
          'rgba(124, 252, 0, 0.30)',
          'rgba(173, 255, 0, 0.30)',
          'rgba(0, 100, 0, 0.30)',
          'rgba(34, 139, 34, 0.30)',
          'rgba(0, 255, 0, 0.30)',
          'rgba(0, 250, 154, 0.30)',
          'rgba(60, 179, 113, 0.30)',
          'rgba(32, 178, 170, 0.30)',
          'rgba(47, 79, 79, 0.30)',
          'rgba(0, 139, 139, 0.30)',
          'rgba(0, 255, 255, 0.30)',
          'rgba(0, 191, 255, 0.30)',
          'rgba(30, 144, 255, 0.30)',
          'rgba(135, 206, 250, 0.30)',
          'rgba(0, 0, 205, 0.30)',
          'rgba(0, 0, 255, 0.30)',
          'rgba(0, 0, 139, 0.30)',
          'rgba(25, 25, 112, 0.30)',
        ],
        borderColor: [
          'rgba(154, 205, 50, 1)',
          'rgba(107, 142, 35, 1)',
          'rgba(124, 252, 0, 1)',
          'rgba(173, 255, 0, 1)',
          'rgba(0, 100, 0, 1)',
          'rgba(34, 139, 34, 1)',
          'rgba(0, 255, 0, 1)',
          'rgba(0, 250, 154, 1)',
          'rgba(60, 179, 113, 1)',
          'rgba(32, 178, 170, 1)',
          'rgba(47, 79, 79, 1)',
          'rgba(0, 139, 139, 1)',
          'rgba(0, 255, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(30, 144, 255, 1)',
          'rgba(135, 206, 250, 1)',
          'rgba(0, 0, 205, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 139, 1)',
          'rgba(25, 25, 112, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}


/// user change the color of webpage
var input = document.querySelector('input');
var body = document.querySelector('body');

input.addEventListener('change',
  function(){
    body.style.setProperty('--body-color', input.value);
  });

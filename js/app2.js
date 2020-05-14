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


// function previous(){
//   if (Storage !== true){
//     var pageData = JSON.stringify(allBusMall);
//     localStorage.setItem('webData', pageData);

//     console.log('hey', pageData);

//     if(Storage !== false){
//       var fromLS = localStorage.getItem('webData');
//       var toJS = JSON.parse(fromLS);
//       console.log('will this work', toJS);

//       for
//     }
//   }
// }
// previous();

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
//////                     WANT TO MAKE VOTES AND VIEWS VAR INSTEAD ON 0. MAKE FUNCTION TO SHOOT DATA THROUGH INSTEAD OF REFACTORING. ON THE RIGHT PATH FOR LINE 138-147.
//////
// function start(){
// var pageData = JSON.stringify(allBusMall);
// localStorage.setItem('webData', pageData);

// console.log('hey', pageData);

// var fromLS = localStorage.getItem('webData');

// var toJS = JSON.parse(fromLS);
// console.log('will this work', toJS);


// }
// start();



// function previous(){
//   if (Storage !== true){
//     var pageData = JSON.stringify(allBusMall);
//     localStorage.setItem('webData', pageData);

//     console.log('hey', pageData);

//     if(Storage !== false){
//       var fromLS = localStorage.getItem('webData');
//       var toJS = JSON.parse(fromLS);
//       console.log('will this work', toJS);

//       for
//     }
//   }
// }
// previous();


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
          'rgba(44, 130, 201, 0.50)',
          'rgba(30, 139, 195, 0.50)',
          'rgba(137, 196, 244, 0.50)',
          'rgba(75, 119, 190, 0.50)',
          'rgba(65, 131, 215, 0.50)',
          'rgba(89, 171, 227, 0.50)',
          'rgba(34, 167, 240, 0.50)',
          'rgba(25, 181, 254, 0.50)',
          'rgba(52, 152, 219, 0.50)',
          'rgba(37, 116, 169, 0.50)',
          'rgba(1, 50, 67, 0.50)',
          'rgba(107, 185, 240, 0.50)',
          'rgba(92, 151, 191, 0.50)',
          'rgba(31, 58, 147, 0.50)',
          'rgba(68, 108, 179, 0.50)',
          'rgba(51, 110, 123, 0.50)',
          'rgba(58, 83, 155, 0.50)',
          'rgba(44, 62, 80, 0.50)',
          'rgba(197, 239, 247, 0.50)',
          'rgba(34, 49, 63, 0.50)'
        ],
        borderColor: [
          'rgba(0, 0, 255, 1)',
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: views,
        backgroundColor: [
          'rgba(130, 44, 44, 0.50)',
          'rgba(139, 30, 30, 0.50)',
          'rgba(196, 137, 137, 0.50)',
          'rgba(119, 75, 190, 0.50)',
          'rgba(131, 65, 215, 0.50)',
          'rgba(171, 89, 227, 0.50)',
          'rgba(167, 34, 240, 0.50)',
          'rgba(181, 25, 254, 0.50)',
          'rgba(152, 52, 219, 0.50)',
          'rgba(116, 37, 169, 0.50)',
          'rgba(50, 1, 67, 0.50)',
          'rgba(185, 107, 240, 0.50)',
          'rgba(151, 92, 191, 0.50)',
          'rgba(58, 31, 147, 0.50)',
          'rgba(108, 68, 179, 0.50)',
          'rgba(110, 51, 123, 0.50)',
          'rgba(83, 58, 155, 0.50)',
          'rgba(62, 44, 80, 0.50)',
          'rgba(239, 197, 247, 0.50)',
          'rgba(49, 34, 63, 0.50)'
        ],
        borderColor: [
          'rgba(0, 0, 255, 1)',
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

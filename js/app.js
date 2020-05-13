'strinct';

var parentE = document.getElementById('mallImgs');

var allMallPics = [];

function Data(fp, alt, title){
  this.filePath = fp;
  this.alt = alt;
  this.title = title;
  this.votes = 0;
  this.views = 0;
  allMallPics.push(this);
}

new Data('img/bag.jpg', 'bag', 'bag');
new Data('img/bathroom.jpg', 'bathroom', 'bathroom');
new Data('img/banana.jpg', 'banana', 'banana');
new Data('img/boots.jpg', 'boots', 'boots');
new Data('img/breakfast.jpg', 'breakfast', 'breakfast');
new Data('img/bubblegum.jpg', 'bubblegum', 'bubblegum');
new Data('img/chair.jpg', 'chair', 'chair');
new Data('img/cthulhu.jpg', 'cthulhu', 'cthulhu');
new Data('img/dog-duck.jpg', 'dog-duck', 'dog-duck');
new Data('img/dragon.jpg', 'dragon', 'dragon');
new Data('img/pen.jpg', 'pen', 'pen');
new Data('img/pet-sweep.jpg', 'pet-sweep', 'pet-sweep');
new Data('img/scissors.jpg', 'scissors', 'scissors');
new Data('img/shark.jpg', 'shark', 'shark');
new Data('img/sweep.png', 'sweep', 'sweep');
new Data('img/tauntaun.jpg', 'tauntaun', 'tauntaun');
new Data('img/unicorn.jpg', 'unicorn', 'unicorn');
new Data('img/usb.gif', 'usb', 'usb');
new Data('img/water-can.jpg', 'water-can', 'water-can');
new Data('img/wine-glass.jpg', 'wine-glass', 'wine-glass');


Data.prototype.input = function(){
  var imageElement = document.createElement('img');

  imageElement.setAttribute('src', this.filePath);
  imageElement.setAttribute('alt', this.alt);
  imageElement.setAttribute('title', this.title);

  parentE.appendChild(imageElement);
};

function randomNumber(min=0, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showRandomPicture(){
  parentE.textContent = '';

  var randomPic = randomNumber(0, allMallPics.length-1);
  var secRandomPic = randomNumber(0, allMallPics.length-1);
  var thirdRandomPic = randomNumber(0, allMallPics.length-1);




  while(randomPic === secRandomPic || secRandomPic === thirdRandomPic || randomPic === thirdRandomPic){
    secRandomPic = randomNumber(0, allMallPics.length-1);
    thirdRandomPic = randomNumber(0, allMallPics.length-1);
  }


  allMallPics[randomPic].input();
  allMallPics[randomPic].views++;

  allMallPics[secRandomPic].input();
  allMallPics[secRandomPic].views++;

  allMallPics[thirdRandomPic].input();
  allMallPics[thirdRandomPic].views++;

}

showRandomPicture();





'strinct';

var parent = document.getElementById('mallImgs');

var allMallPics = [];

function data(fp, alt, title){
    this.filePath = fp;
    this.alt = alt;
    this.title = title;
    this.votes = 0;
    this.views = 0;
    allMallPics.push(this);
}

new data('img/bag.jpg', 'bag', 'bag')
new data('img/bathroom.jpg', 'bathroom', 'bathroom')
new data('img/banana.jpg', 'banana', 'banana')
new data('img/boots.jpg', 'boots', 'boots')
new data('img/breakfast.jpg', 'breakfast', 'breakfast')
new data('img/bubblegum.jpg', 'bubblegum', 'bubblegum')
new data('img/chair.jpg', 'chair', 'chair')
new data('img/cthulhu.jpg', 'cthulhu', 'cthulhu')
new data('img/dog-duck.jpg', 'dog-duck', 'dog-duck')
new data('img/dragon.jpg', 'dragon', 'dragon')
new data('img/pen.jpg', 'pen', 'pen')
new data('img/pet-sweep.jpg', 'pet-sweep', 'pet-sweep')
new data('img/scissors.jpg', 'scissors', 'scissors')
new data('img/shark.jpg', 'shark', 'shark')
new data('img/sweep.png', 'sweep', 'sweep')
new data('img/tauntaun.jpg', 'tauntaun', 'tauntaun')
new data('img/unicorn.jpg', 'unicorn', 'unicorn')
new data('img/usb.gif', 'usb', 'usb')
new data('img/water-can.jpg', 'water-can', 'water-can')
new data('img/wine-glass.jpg', 'wine-glass', 'wine-glass')


data.prototype.input = function(){
    var imageElement = document.createElement('img');

    imageElement.setAttribute('src', this.filePath);
    imageElement.setAttribute('alt', this.alt);
    imageElement.setAttribute('title', this.title);

    parent.appendChild(imageElement);
}

function randomNumber(min=0, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showRandomPicture(){
    parent.textContent = '';

    var randomPic = randomNumber(0, allMallPics.length-1);
    var secRandomPic = randomNumber(0, allMallPics.length-1);
    var thirdRandomPic = randomNumber(0, allMallPics.length-1);

    

    
        while(randomPic === secRandomPic || secRandomPic === thirdRandomPic || randomPic === thirdRandomPic){
            secRandomPic = randomNumber(0, allMallPics.length-1);
            thirdRandomPic = randomNumber(0, allMallPics.length-1);
        };
        
        
        allMallPics[randomPic].input();
        allMallPics[randomPic].views++

        allMallPics[secRandomPic].input();
        allMallPics[secRandomPic].views++

        allMallPics[thirdRandomPic].input();
        allMallPics[thirdRandomPic].views++

}

showRandomPicture();


var chooseHowManyRounds = 10

parent.addEventListener('click', function(){
    var picClicked = event.target.title;

    for(var i = 0; i<allMallPics.length; i++){
        if(picClicked === allMallPics[i].title){
            allMallPics[i].votes++;
            Rounds++;

            if (rounds === chooseHowManyRounds){
                parent.removeEventListener()
            }
        }
    }
    showRandomPicture();

});








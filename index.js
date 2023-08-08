var colorSelectRed = document.getElementById('red');
var colorSelectBlack = document.getElementById('black');
var colorSelectBlue = document.getElementById('blue');
var colorSelectPink = document.getElementById('pink');
var colorSelectPurple = document.getElementById('purple');
var imgColor = document.getElementById('images');


colorSelectRed.addEventListener( 'click' , function(){
    imgColor.src = 'http://127.0.0.1:5500/red.png'
});

colorSelectBlack.addEventListener( 'click' , function(){
    imgColor.src = 'http://127.0.0.1:5500/black.png'
});

colorSelectBlue.addEventListener( 'click' , function(){
    alert('Color Not Available');
});

colorSelectPink.addEventListener( 'click' , function(){
    imgColor.src = 'http://127.0.0.1:5500/pink.png'
});

colorSelectPurple.addEventListener( 'click' , function(){
    imgColor.src = 'http://127.0.0.1:5500/purple.png'
});

var featureSelectTime = document.getElementById('time');
var featureSelectHeart = document.getElementById('heart');

var featureImage = document.getElementById('timer');

featureSelectTime.addEventListener( 'click' , function(){
    featureImage.src = 'http://127.0.0.1:5500/timer.png'
});

featureSelectHeart.addEventListener( 'click' , function(){
    featureImage.src = 'http://127.0.0.1:5500/bpm.png'
});

var buyNow = document.getElementById('buy-now');

buyNow.addEventListener( 'click' , function(){
    alert('Item out of stock');
});
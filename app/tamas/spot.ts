import document from "document";

var currentAnimation = 'sit';
var animationFrame = 1;
var image = document.getElementById('image');
var animationInterval = null;

export function Spot () {
    animationInterval = setInterval(swapImageAnimator, 500);
}

Spot.prototype.buyFood = function () {
    setAnimation('eat');
    setTimeout(function () {
        setAnimation('sit')
    }, 4000);
}

var stopAnimation = function () {
    clearInterval(Spot.animationInterval);
}

var setAnimation = function (animation) {
    animationFrame = 1;
    currentAnimation = animation;
}

var swapImageAnimator = function() {
    switch (currentAnimation) {
        case 'sit':
            sitAnimation();
            break;
        case 'sleep':
            sleepAnimation();
            break;
        case 'eat':
            eatAnimation();
            break;
    }
}

var sitAnimation = function () {
    switch(animationFrame) {
        case 1:
            image.href = "img/spot-sit-tail-low.png";
            animationFrame = 2;
            break;
        case 2:
            image.href = "img/spot-blink.png";
            animationFrame = 3;
            break;
        case 3:
            image.href = "img/spot-sit-tail-high.png";
            animationFrame = 4;
            break;
        case 4:
            image.href = "img/spot-sit.png";
            animationFrame = 5;
            break;
        case 5:
            image.href = "img/spot-sit-tail-low.png";
            animationFrame = 6;
            break;
        case 6:
            image.href = "img/spot-sit.png";
            animationFrame = 7;
            break;
        case 7:
            image.href = "img/spot-sit-tail-high.png";
            animationFrame = 8;
            break;
        case 8:
            image.href = "img/spot-sit.png";
            animationFrame = 1;
            break;
    }
}

var sleepAnimation = function () {
    switch(animationFrame) {
        case 1:
            image.href = "img/spot-sleep1.png";
            animationFrame = 2;
            break;
        case 2:
            image.href = "img/spot-sleep2.png";
            animationFrame = 1;
            break;
    }
}

var eatAnimation = function () {
    switch(animationFrame) {
        case 1:
            image.href = "img/spot-eat1.png";
            animationFrame = 2;
            break;
        case 2:
            image.href = "img/spot-eat2.png";
            animationFrame = 1;
            break;
    }
}
import document from "document";

//CONSTS
var TAMA_CONTAINER = document.getElementById('image');

var currentAnimation = 'sit';
var animationFrame = 1;
var animationInterval = null;

export function Spot () {
    startAnimation();
}

Spot.prototype.isBusy = function() {
    return isBusy();
}

Spot.prototype.eatFood = function() {
    setAnimation('eat');
    setTimeout(function() {
        setAnimation('sit')
    }, 4000);
}

Spot.prototype.checkBedTime = function() {
    var today = new Date(),
        hours = (today.getHours()) % 24;

    if (hours >= 21 || hours < 7) {
        goToSleep();
    } else {
        wakeUp();
    }
}

var goToSleep = function() {
    if ('sleep' !== currentAnimation && !isBusy()) {
        setAnimation('sleep');
    }
}

var wakeUp = function() {
    if ('sleep' === currentAnimation) {
        setAnimation('sit');
    }
}

var startAnimation = function () {
    animationInterval = setInterval(swapImageAnimator, 500);
}
  
var isBusy = function() {
    return 'sit' !== currentAnimation;
}

var stopAnimation = function() {
    clearInterval(animationInterval);
    setAnimation('');
}

var setAnimation = function(animation) {
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

var sitAnimation = function() {
    switch(animationFrame) {
        case 1:
            TAMA_CONTAINER.href = "img/spot-sit-tail-low.png";
            animationFrame = 2;
            break;
        case 2:
            TAMA_CONTAINER.href = "img/spot-blink.png";
            animationFrame = 3;
            break;
        case 3:
            TAMA_CONTAINER.href = "img/spot-sit-tail-high.png";
            animationFrame = 4;
            break;
        case 4:
            TAMA_CONTAINER.href = "img/spot-sit.png";
            animationFrame = 5;
            break;
        case 5:
            TAMA_CONTAINER.href = "img/spot-sit-tail-low.png";
            animationFrame = 6;
            break;
        case 6:
            TAMA_CONTAINER.href = "img/spot-sit.png";
            animationFrame = 7;
            break;
        case 7:
            TAMA_CONTAINER.href = "img/spot-sit-tail-high.png";
            animationFrame = 8;
            break;
        case 8:
            TAMA_CONTAINER.href = "img/spot-sit.png";
            animationFrame = 1;
            break;
    }
}

var sleepAnimation = function() {
    switch(animationFrame) {
        case 1:
            TAMA_CONTAINER.href = "img/spot-sleep1.png";
            animationFrame = 2;
            break;
        case 2:
            TAMA_CONTAINER.href = "img/spot-sleep2.png";
            animationFrame = 1;
            break;
    }
}

var eatAnimation = function() {
    switch(animationFrame) {
        case 1:
            TAMA_CONTAINER.href = "img/spot-eat1.png";
            animationFrame = 2;
            break;
        case 2:
            TAMA_CONTAINER.href = "img/spot-eat2.png";
            animationFrame = 1;
            break;
    }
}
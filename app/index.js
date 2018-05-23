import document from "document";

let image = document.getElementById('image');
let animationFrame = 1;

setInterval(swapImage, 500);

function swapImage() {
    switch(animationFrame) {
        case 1:
            image.href = "img/dog1.jpeg";
            animationFrame = 2;
            break;
        case 2:
            image.href = "img/dog2.jpeg";
            animationFrame = 1;
            break;
    }
}

const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
]

let index = 0;
const imageElement = document.getElementById('slider-img');
const x = setInterval(() => {
    if (index === images.length){
        index = 0;        
    }
    const imgUrl = images[index];
    imageElement.setAttribute('src', imgUrl);
    // console.log(index, images[index]);
    index++;
}, 1000);
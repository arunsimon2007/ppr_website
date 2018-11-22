import kivi from '../../images/IMG_3525.JPG';
function helloworld(){
    const img = document.createElement('img');
    img.src = kivi;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default helloworld;
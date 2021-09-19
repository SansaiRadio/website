var images = [
    "../img/logos/1.png",
    "../img/logos/2.png",
    "../img/logos/3.png",
    "../img/logos/4.png",
    "../img/logos/5.png",
    "../img/logos/6.png",
    "../img/logos/7.png",
    "../img/logos/8.png",
    "../img/logos/9.png",
    "../img/logos/10.png",
    "../img/logos/11.png",
    "../img/logos/12.png",
    "../img/logos/13.png",
    "../img/logos/14.png",
    "../img/logos/15.png"];

function randImg() {
    var size = images.length
    var x = Math.floor(size * Math.random())
    document.getElementById('steve').src = images[x];
}

randImg();
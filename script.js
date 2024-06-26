var mainimg = document.getElementById("MainIm");
var smallimg = document.getElementsByClassName("small-img");

for (let i = 0; i < smallimg.length; i++) {
    smallimg[i].onclick = function() {
        mainimg.src = smallimg[i].src;
    }
}



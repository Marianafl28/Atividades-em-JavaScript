var index = 0;

function changeColors(){
    var colors = ["red", "green", "blue", "orange", "yellow","green", "purple"];
    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if(index > colors.lenght -1)
        index = 0;
}
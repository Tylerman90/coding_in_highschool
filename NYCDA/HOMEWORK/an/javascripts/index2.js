
var myImage = document.getElementById("myPhoto");

var imageArray = ["../an/images/nycda.jpg", "../an/images/eagles.jpg", "../an/images/phillies.jpg", "../an/images/sixers.png", "../an/images/game.jpg", "../an/images/csteaks.jpg", "../an/images/steaks.jpg", "../an/images/ramen.jpg"];

var imageIndex = 0;

function changeImage () {
	myImage.setAttribute("src", imageArray[imageIndex]);

	imageIndex++

	if (imageIndex >= imageArray.length) {
		imageIndex=0;
	}
}

var intervalHandle = setInterval(changeImage, 2000);

myPhoto.onclick = function() {
	setInterval(intervalHandle);
}
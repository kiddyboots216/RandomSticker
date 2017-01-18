function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
var num = getRandomInt(1,44);
var imageUrl = '<img src="' + "images/" + num + ".png" + '" alt = "">';
document.write(imageUrl);

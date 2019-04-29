function changeWallet(id, s) {
    var image = document.getElementById(id);
    image.src = s
}

function colorSelect(s) {
	document.getElementById("sBrown").classList.remove("selectedColor");
	document.getElementById("sBlack").classList.remove("selectedColor");
	document.getElementById("sGray").classList.remove("selectedColor");
	document.getElementById("sBlue").classList.remove("selectedColor");
	document.getElementById(s).classList.add("selectedColor");
}

function changeColors(s) {
	document.getElementById("blackWallet").classList.add("hide");
	document.getElementById("grayWallet").classList.add("hide");
	document.getElementById("brownWallet").classList.add("hide");
	document.getElementById("blueWallet").classList.add("hide");
	document.getElementById(s).classList.remove("hide");
}
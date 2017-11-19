var canvas, width, height, ctx;
var init = function() {
	canvas = document.getElementById('canvasId');
	width  = canvas.width;
	height = canvas.height;
	ctx = canvas.getContext('2d');
};

var fillAll = function(color) {
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, width, height);
};

var clearAll = function() {
	ctx.clearRect(0, 0, width, height);
};

var drawRect = function(x, y, width, height, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, width, height);
};

var drawCircle = function(x, y, r, color) {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI*2, false);

	ctx.fill();
};

var isCollision = function(x1, y1, h1, w1, x2, y2, w2, h2) {
	return (x1 < x2 + w2 &&
			x1 + w1 > x2 &&
			y1 < y2 + h2 &&
			y1 + h1 > y2);
};
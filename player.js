var player = {
	level : 1,
	hp : 3,
	x : 50,
	y : 460,
	w : 80,
	h : 10,
	color : '#5E343D',
	speed : 4,
	dx : 0,
	score : 0,

	updScore : function(score) {
		this.score  +=score;
		document.getElementById('score').innerHTML = this.score;
	},

	updHp : function(hp) {
		this.hp  -=hp;
		document.getElementById('hp').innerHTML = this.hp;
	},

	draw : function() {
		drawRect(this.x, this.y, this.w, this.h, this.color);
	},

	move : function() {
		if(isKeyDown('A')) {
			this.x -= this.speed;
			this.dx = -1; // зегулирование стороны полета шарика: в лево
		} else if(isKeyDown('D')) {
			this.x += this.speed;
			this.dx = 1; // зегулирование стороны полета шарика: в право
		} else {
			this.dx = 0;
		}
	},

	init : function(x, w, color) {
		this.x = x;
		//this.y = y;
		this.width = w;
		this.color = color;
	}
};
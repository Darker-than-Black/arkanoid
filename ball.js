var ball = {
	speedX : 3,
	speedY : 3,
	dx : 1, 
	dy : -1,

	color : 'blue',
	x : 0,
	y : 0,
	radius : 5,

	clear : function() {
		speedX = 3;
		speedY = 3;
		this.dx = 1;
		this.dy = -1;
	},

	draw : function() {
		drawCircle(this.x, this.y, this.radius, this.color);
	},

	init : function(x, y, radius, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
	},

	move : function(){
		this.x += this.speedX * this.dx;
		this.y += this.speedY * this.dy;
	},

	collision : function() {
		for(var i in grid.nodes) {
			var enemy = grid.nodes[i];
			if(isCollision(this.x-this.radius, this.y - this.radius, this.radius*2, this.radius*2, enemy.x, enemy.y, enemy.width, enemy.height)){
				this.dy *= -1;
				grid.destroy(i);
				this.speedY += 0.1; // сложность, при попадании по блоку скорость вырастает
				//console.log(this.speed);
				player.speed += 0.2; // также растет скорость движения платформы
				player.updScore(1);
			}
		}

		if(isCollision(this.x-this.radius, this.y - this.radius, this.radius*2, this.radius*2, player.x, player.y, player.w, player.h)){
			this.dy = -1;
			if(this.dx == player.dx) {
				this.speedX *= 1.2;
			} else {
				this.speedX /= player.dx != 0 ? 1.2 : 1;
			}
			this.dx = player.dx || this.dx;
		}

		if(this.x + this.radius >= width) { // правая граница
			this.dx = -1;
		}

		if(this.x - this.radius <= 0) { // левая граница
			this.dx = 1;
		}

		if(this.y - this.radius <= 0) { // верх карты
			this.dy = 1;
		}

		if(this.y >= height) {
			if(player.hp < 1) {
				player.hp = 3;
				player.score = 0;
				grid.clear();
				this.clear();
				grid.create(map);
				alert('Вы прогиграли!');
				//game();
			}
				
				//console.log('Вы прогиграли!');
			player.updHp(1);
			ball.init(player.x + (player.w / 2), player.y - ball.radius, 4, 'white');

		}
	},
};
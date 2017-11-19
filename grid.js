var grid = {
	nodes : [],
	add : function(x, y, w, h, c) {
		var tmp = new _Enemy(x, y, w, h, c);
		this.nodes.push(tmp);
	},

	generate : function(count, w, h, color) {
		var dW = 5,
		dX = dW;// dY = dW;
		var dCountX = Math.ceil(width / (w+dW))-1;
		//console.log(dCountX);
		var dAllW = Math.ceil((width - (w + dW) * dCountX) / 2);
		var dY = dAllW;
		for(var i = 0; i < count; i++) {
			for(var j = 0; j < dCountX; j++) {
				if(j == 0)
					dX += Math.ceil(dAllW - dW/2);
				this.add(dX, dY, w, h, color);
				dX += w+dW;
			};
			dY += h+dW;
			dX = dW;
		}
	},

	destroy : function(id) {
		this.nodes.splice(id, 1);
	},

	draw : function() {
		for(en in this.nodes) {
			this.nodes[en].draw();
		}
	},

	create : function(map) {
		var doffsetX = width - (map.tiles[0].length * (map.width + map.offset));
		//console.log(doffsetX);
		for(var t1 in map.tiles) {
			//console.log(map.tiles[t]);
			for(var t2 in map.tiles[t1]) {
				//console.log(map.tiles[t1][t2]);
				var tile = map.tiles[t1][t2];
				var dx = doffsetX / 2 + t2 * (map.width + map.offset);
				var dy = map.offset + t1 * (map.height + map.offset);
				if(tile == 1) {
					this.add(dx, dy, map.width, map.height, map.color);
				}
			}
		}
	},

	clear : function() {
		this.nodes = [];
	},
};


var _Enemy = function(x, y, w, h, color) {
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.color = color;
};

_Enemy.prototype.draw = function() {
	drawRect(this.x, this.y, this.width, this.height, this.color);
};

//grid.add(13, 14, 20, 20, 'grey');
//var en1 = new _Enemy(14, 15, 20, 20, 'grey');
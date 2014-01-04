(function(root) {
	var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

	var Board = SnakeGame.Board = function () {
		this.gridSize = 20;
		this.grid = this.makeGrid();
		this.midpoint = [
			Math.floor(this.gridSize / 2),
			Math.floor(this.gridSize / 2)
		];
		this.snake = new SnakeGame.Snake(this);
		this.dirMapping = {
			'N': [-1, 0],
			'E': [ 0, 1],
			'S': [ 1, 0],
			'W': [ 0,-1]
		};
	};

	Board.prototype.add = function (coord1, coord2) {
		return [coord1[0] + coord2[0], coord1[1] + coord2[1]];
	};

	Board.prototype.coordIncludes = function (arrOfCoords, target) {
		for(var i = 0; i < arrOfCoords.length; i++) {
			if (arrOfCoords[i][0] === target[0] && arrOfCoords[i][1] === target[1]) {
				return true;
			}
		}
		return false;
	};

	Board.prototype.makeGrid = function () {
    return _.times(20, function (i) {
      return _.times(20, function (j) {
        return null;
      });
    });
	};

	Board.prototype.render = function () {
		var text = "";

		for(var i = 0; i < this.grid.length; i++) {
			for(var j = 0; j < this.grid.length; j++) {
				if (this.coordIncludes(this.snake.segments, [i, j])) {
					text += "S";
				} else {
					text += ".";
				}
			}

			text += "\n";
		}

		return text;
	};

})(this);
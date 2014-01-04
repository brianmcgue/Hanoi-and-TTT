(function(root) {
	var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

	var Snake = SnakeGame.Snake = function (board) {
		this.board = board;
		this.dir = 'N';
		this.segments = [
			this.board.midpoint,
			this.board.add(this.board.midpoint, [1, 0]),
			this.board.add(this.board.midpoint, [2, 0])
		];
	};

	Snake.prototype.move = function () {
		var delta = this.board.dirMapping[this.dir];
		var newSegment = this.board.add(this.segments[0], delta);
		this.segments.unshift(newSegment);
		this.segments.pop();
	};

	Snake.prototype.turn = function (dir) {
		this.dir = dir;
	};

})(this);
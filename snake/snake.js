(function(root) {
	var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

	var Snake = SnakeGame.Snake = function (board) {
		this.board = board;
		this.dir = 'N';
		this.segments = [this.board.midpoint];
		this.dirMapping = {
			'N': [-1, 0],
			'E': [ 0, 1],
			'S': [ 1, 0],
			'W': [ 0,-1]
		};
	};

	Snake.prototype.addSegment = function (coord1, coord2) {
		var newSegment = [coord1[0] + coord2[0], coord1[1] + coord2[1]];
		this.segments.unshift(newSegment);
	};

	Snake.prototype.move = function () {
		var delta = this.dirMapping[this.dir];
		this.addSegment(this.segments[0], delta);
		this.segments.pop();
	};

	Snake.prototype.turn = function (dir) {
		if (!this.invalidTurn(dir)) {this.dir = dir;}
	};

	Snake.prototype.invalidTurn = function (dir) {
		invalidTurn = { 'N':'S', 'E':'W', 'S':'N', 'W':'E' }
		return (invalidTurn[dir] === this.dir);
	};

})(this);
(function(root) {
	var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

	var UI = SnakeGame.UI = function (el) {
		this.$el = $(el);
		this.keyMapping = {
			37: 'W',
			38: 'N',
			39: 'E',
			40: 'S'
		};
	};

	UI.prototype.draw = function () {
		this.$el.html($('<pre>').html(this.board.render()));
	};

	UI.prototype.installKeyHandlers = function () {
		this.$el.on('keydown', function(event) {
			var dir = this.keyMapping[event.which];
			if (dir !== undefined) {
				this.board.snake.turn(dir);
			}
		});
	};

	UI.prototype.start = function () {
		this.board = new SnakeGame.Board();
		this.installKeyHandlers();
		setInterval(this.step.bind(this), 500);
	};

	UI.prototype.step = function () {
		console.log("stepping");
		this.board.snake.move();
		this.draw();
	};

})(this);
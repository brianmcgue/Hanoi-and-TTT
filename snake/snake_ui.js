(function(root) {
	var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

	var UI = SnakeGame.UI = function (el) {
		this.$el = $(el);
		this.keyMapping = {
			32: 'pause',
			37: 'W',
			38: 'N',
			39: 'E',
			40: 'S'
		};
	};

	UI.prototype.beginInterval = function () {
		this.interval = setInterval(this.step.bind(this), 100);
	}

	UI.prototype.draw = function () {
		this.$el.html($('<pre>').html(this.board.render()));
	};

	UI.prototype.handleKey = function() {
		var dir = this.keyMapping[event.which];
		if (dir === 'pause') {
			this.handlePause();
		} else if (this.interval && dir !== undefined) {
			this.board.snake.turn(dir);
		}
	};

	UI.prototype.handlePause = function () {
		if (this.interval) {
			this.pause();
		} else {
			this.beginInterval();
		}
	};

	UI.prototype.installKeyHandlers = function () {
		$(window).on('keydown', this.handleKey.bind(this));
	};

	UI.prototype.pause = function () {
		clearInterval(this.interval);
		delete this.interval;
	};

	UI.prototype.start = function () {
		this.board = new SnakeGame.Board();
		this.installKeyHandlers();
		this.beginInterval();
	};

	UI.prototype.step = function () {
		this.board.snake.move();
		this.draw();
	};
})(this);
(function(root) {
	var TTT = root.TTT = (root.TTT || {});

	var UI = TTT.UI = function(game) {
		this.game = game;
	};

	UI.prototype.checkWinner = function () {
		if (this.game.winner()) {
			this.endGame();
		}
	};

	UI.prototype.endGame = function() {
		alert(this.game.player + " won!");
		$('.tile').off('click');
	};

	UI.prototype.installClickHandler = function() {
		var that = this;

		$('.tile').on('click', function() {
			var pos = that.parsePosition(this);

			if (that.game.move(pos)) {
				if (that.game.player === "x") {
					$(this).addClass('x');
				} else {
					$(this).addClass('o');
				}

				that.checkWinner();
			}
		});
	};

	UI.prototype.parsePosition = function (tile) {
			var posStrings = $(tile).attr("data-id").split('-');
			var pos = [];

			posStrings.forEach(function(coord) {
				pos.push(parseInt(coord));
			});
			return pos;
	}

	UI.prototype.start = function() {
		this.installClickHandler();
		this.game.run();
	};
})(this);

$(function() {

});
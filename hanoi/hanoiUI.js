(function(root) {
	var Hanoi = root.Hanoi = (root.Hanoi || {});

	var UI = Hanoi.UI = function(game) {
		this.game = game;
		this.discMapping = {
			1: "small",
			2: "medium",
			3: "large"
		}
	};

	UI.prototype.checkIfWon = function () {
		if (this.game.isWon()) {
			alert("Winner!");
			$('.tower').off('click');
		}
	};

	UI.prototype.firstClickHandler = function (element) {
		this.fromPile = parseInt($(element).attr('id')[5]);
	};

	UI.prototype.installClickHandler = function () {
		var ui = this;

		$('.tower').on('click', function() {
			if (ui.fromPile === undefined) {
				ui.firstClickHandler(this);
			} else {
				ui.secondClickHandler(this);
				ui.checkIfWon();
			}
		});

	};

	UI.prototype.render = function () {
		var towers = this.game.towers;
		$('.tower').empty();

		for(var i = 0; i < towers.length; i++) {
			var pile = towers[i];
			numDiscs = pile.length;

			for(var j = numDiscs - 1; j >= 0; j--) {
				var disc = pile[j];
				var size = this.discMapping[disc];
				var div = $('<div>').addClass(size);
				$('#tower' + i).append(div);
			}
		}
	};

	UI.prototype.secondClickHandler = function (element) {
		this.toPile = parseInt($(element).attr('id')[5]);
		this.game.move(this.fromPile, this.toPile);
		delete this.fromPile;
		delete this.toPile;
		this.render();
	};

})(this);
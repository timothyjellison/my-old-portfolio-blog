$(document).ready(function(){
	// master variables
	const board = {
    any_square: $('.squares *'),
    top_left: $('#top-left'),
    top_center: $('#top-center'),
    top_right: $('#top-right'),
    middle_left: $('#middle-left'),
    middle_center: $('#middle-center'),
    middle_right: $('#middle-right'),
    bottom_left: $('#bottom-left'),
    bottom_center: $('#bottom-center'),
  	bottom_right: $('#bottom-right')
  }
	var game = {
		turn_count: 0,
  	play_enabled: true,
  	winner_declared: false,
    active_player: 'player',
    potential_wins: [
      [
        board.top_left,
        board.top_center,
        board.top_right
      ],
      [
        board.middle_left,
        board.middle_center,
        board.middle_right
      ],
      [
        board.bottom_left,
        board.bottom_center,
        board.bottom_right
      ],
      [
        board.top_left,
        board.middle_left,
        board.bottom_left
      ],
      [
        board.top_center,
        board.middle_center,
        board.bottom_center
      ],
      [
        board.top_right,
        board.middle_right,
        board.bottom_right
      ],
      [
        board.top_left,
        board.middle_center,
        board.bottom_right
      ],
      [
        board.bottom_left,
        board.middle_center,
        board.top_right
      ]
    ]
  }

	// common helper functions
	function is_unclaimed(square) {
		return !square.hasClass('selected-by-player') && !square.hasClass('selected-by-computer');
	}
	function highlight(this_square) {
		if (is_unclaimed(this_square)) {
			if (game.active_player == 'player') {
				this_square.toggleClass('selected-by-player');
				game.active_player = 'computer';
				game.turn_count++;
  	  	check_for_winner();
				if (game.play_enabled) {
					setTimeout(computer_moves, 500);
				}
			} else {
				this_square.toggleClass('selected-by-computer');
				game.active_player = 'player';
				game.turn_count++;
  	  	check_for_winner();
			}
		}
  }

	function check_for_winner() {
  	game.potential_wins.forEach(function(potential_win) {
  	  var score = 0;
  	  potential_win.forEach(function(element) {
  	  	if (element.hasClass('selected-by-player')) {
  	  	  score++;
  	  	} else if (element.hasClass('selected-by-computer')) {
  	  	  score--;
  	  	}
  	  });
  	  if (score == 3) {
  	  	declare_winner('player');
  	  } else if (score == -3) {
  	  	declare_winner('computer');
  	  } 
  	});
  	if (game.turn_count == 9 && game.winner_declared == false) {
  		declare_a_draw();
  	}
  }

  function clear_board() {
  	board.any_square.removeClass('selected-by-player');
  	board.any_square.removeClass('selected-by-computer');
  	game.winner_declared = false;
	  game.play_enabled = true;
		game.active_player = 'player';
		game.turn_count = 0;
	}

	function declare_winner(winner) {
		game.winner_declared = true;
  	game.play_enabled = false;
  	setTimeout(function(){
  		if (winner == "player") {
  	  	alert('You win!');
  		} else {
  	  	alert('The computer wins.');
  		}
  	  clear_board();
  	}, 1000);
  }

	function declare_a_draw() {
  	game.play_enabled = false;
  	setTimeout(function(){
  	  alert('Draw!');
  	  clear_board();
  	}, 1000);
  } 

	// ui interaction
	board.any_square.click(function(){
  	if (game.play_enabled) {
  	  var clicked_square = $(this);
  	  highlight(clicked_square);
  	}
  });

	// the computer player's logic
	function computer_moves() {
		// first the computer will try to take the center square
		if (game.active_player == 'computer'){
			if (is_unclaimed(board.middle_center)) {
				highlight(board.middle_center);
				console.log('tier 1 move: take the center')
			}
		}

  	// then it will test for any critical wins
		if (game.active_player == 'computer'){
			game.potential_wins.forEach(function(potential_win) {
				var opportunity = 0;
				var threat = 0;
				potential_win.forEach(function(element) {
					if (element.hasClass('selected-by-player')) {
						threat++;
					} else if (element.hasClass('selected-by-computer')) {
						opportunity++;
					}
				});
				if (opportunity == 2 && threat == 0) {
					var best_move = potential_win.filter(function(element) {
						return is_unclaimed(element);
					})[0];
					if (game.active_player == 'computer'){
						highlight(best_move);
						console.log('tier 2 move: take an opportunity');
					}
				} else if (threat == 2 && opportunity == 0) {
					var best_move = potential_win.filter(function(element) {
						return is_unclaimed(element);
					})[0];
					if (game.active_player == 'computer'){
						highlight(best_move);
						console.log('tier 2 move: stop a threat');
					}
				}
			});
		}

  	// if no crucial moves are found, this loop handles the leftovers
		if (game.active_player == 'computer'){
			game.potential_wins.forEach(function(potential_win) {
				var opportunity = 0;
				var threat = 0;
				potential_win.forEach(function(element) {
					if (element.hasClass('selected-by-player')) {
						threat++;
					} else if (element.hasClass('selected-by-computer')) {
						opportunity++;
					}
				});

				if (threat == 0 && opportunity == 1) {
					var best_move = potential_win.filter(function(element) {
						return is_unclaimed(element);
					})[0];
					if (game.active_player == 'computer'){
						highlight(best_move);
						console.log('tier 3 move: build an opportunity');
					}
				}

				if (threat == 1 && opportunity == 0) {
					var best_move = potential_win.filter(function(element) {
						return is_unclaimed(element);
					})[0];
					if (game.active_player == 'computer'){
						highlight(best_move);
						console.log('tier 3 move: slow a threat');
					}
				}
			});
		}

  }

});
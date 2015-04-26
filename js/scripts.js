var queenAttack = function(queen, enemy) {

  //horizontal/vertical align
  if((queen[1] === enemy[1]) || (queen[0] === enemy[0])) {
    return true;
  }
  //diagonal align
  if((queen[0]-enemy[0]) === (queen[1]-enemy[1])) {
    return true;
  }
  //fail
  else {
    return false;
  }
};

$(document).ready(function() {
  $("form#attack").submit(function(event) {
    var queen_x = parseInt($("input#queen_x").val());
    var queen_y = parseInt($("input#queen_y").val());
    var enemy_x = parseInt($("input#enemy_x").val());
    var enemy_y = parseInt($("input#enemy_y").val());

    var result = queenAttack([queen_x, queen_y], [enemy_x, enemy_y]);
    debugger;
    if(result) {
      $(".result").text("Attack hits");
    } else {
      $(".result").text("Attack misses");
    }
    $("#result").show();
    event.preventDefault();

  });
});

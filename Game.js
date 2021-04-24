var Previous_Click; //store previous click incase user wants to change
var input_type;

function game_set() {
  input_type = false;
  //get the required game size
  do {
    var board_size = parseInt(
      prompt("Please enter a number from 1 to 3", "3"),
      10
    );
  } while (isNaN(board_size) || board_size > 3 || board_size < 1);

  // Empty the game board
  $("#GameContainer").empty();

  /* need to check if board size is not empty and is number first */
  CellIndex = 0;
  tableIndex = 0;
  for (PIndex = 0; PIndex < board_size; PIndex++) {
    $("#GameContainer").append('<p id="para' + PIndex + '"> </p>');

    for (TBLIndex = 0; TBLIndex < board_size; TBLIndex++) {
      //create tables each table is a Tic, Tac, Toe Grid
      $("#para" + PIndex).append(
        '<table id="tbl' + ++tableIndex + '"> </table>'
      );
      //Loop to create the rows and cells in each table
      for (var j = 0; j < 3; j++) {
        var row_template = $("#row-template").html();
        row_template = row_template.replace(
          /@cell1@/g,
          (CellIndex++).toString()
        );
        row_template = row_template.replace(
          /@cell2@/g,
          (CellIndex++).toString()
        );
        row_template = row_template.replace(
          /@cell3@/g,
          (CellIndex++).toString()
        );
        $("#tbl" + tableIndex).append(row_template);
      }
    }
  }
}

// function cell_click(mycell)
// {
//     if (mycell.value == null)
//     {
//         label1 = document.getElementById("LBLplayerTurn")
//         mycell.value = 'O';
//         if (input_type)
//         {
//             mycell.setAttribute("class", "circle");
//             input_type = !input_type;
//             mycell.value = 'o';
//             label1.innerHTML = "Player 1 ( x ) turn";
//         }
//         else
//         {
//             mycell.setAttribute("class", "Exx");
//             input_type = !input_type;
//             mycell.value = 'x';
//             label1.innerHTML = "Player 1 ( o ) turn";
//         }
//         Previous_Click = mycell.id;
//     }
// }

function game_start() {
  Game = document.getElementById("GameContainer");
  for (i = 0; i < Game.length; i++) {}
}

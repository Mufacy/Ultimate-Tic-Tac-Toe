var input_type;
var player = "X";

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

function cell_click(mycell) {
  //on cell click insert X or O
  if (mycell.textContent == "") {
    playerNextMove(mycell);
  }
}

function playerNextMove(cell) {
  if (player === "X") {
    //fill cell with current player
    cell.textContent = "X";
    cell.style.color = "#E94F37";

    //set next player
    player = "O";
    $("#LBLplayerTurn").html("Player ( O ) turn");
  } else {
    cell.textContent = "O";
    cell.style.color = "#F6F7EB";

    player = "X";
    $("#LBLplayerTurn").html("Player ( X ) turn");
  }
}

var counter = 0;
var count = 0;

function assignGameBoard() {
  //take the Small XO board from Website  and create array
  globalBoard = [];

  for (var i = 0; i < 3; i++) {
    globalBoard[i] = [];
    for (var j = 0; j < 3; j++) {
      globalBoard[i][j] = new GlobalBoard();
    }
  }

  //var tableindex = 1;
  for (var k = 0; k < board_size; k++) {
    for (var f = 0; f < board_size; f++) {
      //to iterate over all the tables we can simply use the board size
      // multiplying the k index by the board_size will give us powers of 3
      // by add the index f will get 0,1,2 and then 3,4,5 and then 6,7,8 etc..
      tblIndex = k * board_size + f;

      for (var i = 0; i < N; i++) {
        for (var j = 0; j < N; j++) {
          if ($("#table" + tblIndex).rows[i].cells[j].innerHTML == "")
            globalBoard[k][f].localBoard[i][j] = E;
          else
            globalBoard[k][f].localBoard[i][j] = $("#table" + tblIndex).rows[
              i
            ].cells[j].innerHTML;
        }
      }
    }
  }

  for (
    var i = 0;
    i < N;
    i++ //check for existing winners
  ) {
    for (var j = 0; j < N; j++) {
      globalBoard[i][j].checkWin();
    }
  }
}

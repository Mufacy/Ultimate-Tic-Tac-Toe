var Previous_Click; //store previous click incase user wants to change
var input_type;

function delete_board() //this clears the board
{ 
    var e = document.getElementById('GameContainer');
    
    //e.firstElementChild can be used. 
    var child = e.lastElementChild;  
    while (child) { 
        e.removeChild(child); 
        child = e.lastElementChild; 
    } 
} 

function game_set()
{
    input_type = false;
    //set game size to be dynamic
    do
    {
        var board_size  = parseInt(prompt("Please enter a number from 1 to 3", "3"), 10);
    }while(isNaN(board_size) || board_size > 3 || board_size < 1);
    
    delete_board();
    /* need to check if board size is not empty and is number first */
    CellIndex = 0;
    var Board_Container = document.getElementById('GameContainer');
    for (PIndex = 0 ; PIndex < board_size ; PIndex++)
    {
        var TBL_P = document.createElement('p'); 
        Board_Container.appendChild(TBL_P);
        for (TBLIndex = 0 ; TBLIndex < board_size ; TBLIndex++)
        {   //loop creates dynamic number of tables
            var TBL = document.createElement('table');
            TBL_P.appendChild(TBL);
            for (var j = 0; j < 3; j++) 
            {   //loop creates 3 rows 
                var tbl_row = document.createElement('tr');  
                TBL.appendChild(tbl_row);
                for (var i = 0; i < 3; i++) 
                {   //loop creates 3 cells
                    var TData = document.createElement('td');
                    TData.setAttribute("onclick", "cell_click(this);");
                    TData.setAttribute("id", CellIndex++);  
                    var TypeHolder = document.createElement('span');
                    TData.appendChild(TypeHolder);
                    tbl_row.appendChild(TData);
                } 
            }
        }
        
    }
}

function cell_click(mycell)
{
    if (mycell.value == null)
    {
        label1 = document.getElementById("LBLplayerTurn") 
        mycell.value = 'O';
        if (input_type)
        {
            mycell.setAttribute("class", "circle");
            input_type = !input_type;   
            mycell.value = 'o';
            label1.innerHTML = "Player 1 ( x ) turn";
        }
        else
        {
            mycell.setAttribute("class", "Exx");
            input_type = !input_type;
            mycell.value = 'x';
            label1.innerHTML = "Player 1 ( o ) turn";
        }
        Previous_Click = mycell.id;
    } 
}

function game_start()
{
    Game = document.getElementById("GameContainer");
    for (i=0 ; i< Game.length; i++)
    {

    }
}
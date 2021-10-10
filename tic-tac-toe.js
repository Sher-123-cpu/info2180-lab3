//part 1
var state = [];
var dict = {0:"",1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:""};
var game_state = ["","","","","","","","",];
var click_count = 0;


window.onload = () => { 
    var board_pieces = document.getElementById("board").querySelectorAll("div"); 
    var no_of_pieces = document.getElementById("board").children.length;
    for(i=0;i<no_of_pieces;i++){
        board_pieces[i].setAttribute("id",i); 
        board_pieces[i].setAttribute("class","square"); 
        movingMouse(board_pieces[i],i);
    }
}
//part 2
movingMouse = (item,index) =>
    item.onclick = function(){
        if (state.length == 0){
            item.classList.add("X");
            item.innerHTML = "X";
            state.push("X");
            game_state[id] = "X";
            cancel(item);
            
        }
        
        else if (state[state.length-1] == "X") {
            item.classList.add("O");
            item.innerHTML = "O";
            state.push("O");
            game_state[id] = "O";
            cancel(item);
          
            
        } else {
            item.classList.add("X");
            item.innerHTML = "X";
            state.push("X");
            game_state[id] = "X";
            cancel(item);
        }

        var id = index;
    
    //part 3
        item.onmouseover = function(){
            item.classList.add("hover");
        }
        
        item.onmouseleave = function(){
            item.classList.remove("hover");
        } 
        click_count++;
        console.log(game_state);
        winner(); 
        
    } 
    //part 4
    winner = () =>{
        //for X
        if(game_state[0]== "X" && game_state[1]== "X" && game_state[2] == "X"){
           congatsMessage("X");
        }
        else if(game_state[3]== "X" && game_state[4]== "X" && game_state[5] == "X"){
            congatsMessage("X");
         }
         else if(game_state[6]== "X" && game_state[7]== "X" && game_state[8] == "X"){
            congatsMessage("X");
         }
         else if(game_state[0]== "X" && game_state[3]== "X" && game_state[6] == "X"){
           congatsMessage("X");
        }
        else if(game_state[1]== "X" && game_state[4]== "X" && game_state[7] == "X"){
            congatsMessage("X");
         }
        else if(game_state[2]== "X" && game_state[5]== "X" && game_state[8] == "X"){
            congatsMessage("X");
         }
        else if(game_state[2]== "X" && game_state[4]== "X" && game_state[6] == "X"){
            congatsMessage("X");
         }
         else if(game_state[0]== "X" && game_state[4]== "X" && game_state[8] == "X"){
            congatsMessage("X");
         }
         for O
         if(game_state[0]== "O" && game_state[1]== "O" && game_state[2] == "O"){
            congatsMessage("O");
         }
         else if(game_state[3]== "O" && game_state[4]== "O" && game_state[5] == "O"){
             congatsMessage("O");
          }
          else if(game_state[6]== "O" && game_state[7]== "O" && game_state[8] == "O"){
             congatsMessage("O");
          }
          else if(game_state[0]== "O" && game_state[3]== "O" && game_state[6] == "O"){
            congatsMessage("O");
         }
         else if(game_state[1]== "O" && game_state[4]== "O" && game_state[7] == "O"){
             congatsMessage("O");
          }
         else if(game_state[2]== "O" && game_state[5]== "O" && game_state[8] == "O"){
             congatsMessage("O");
          }
         else if(game_state[2]== "O" && game_state[4]== "O" && game_state[6] == "O"){
             congatsMessage("O");
          }
          else if(game_state[0]== "O" && game_state[4]== "O" && game_state[8] == "O"){
             congatsMessage("O");
          }
        
    }
    //Message
    congatsMessage =(el) =>{
        // status id for message board
        var message = document.getElementById("status");
    
        if (el == "X"){
    
                // for X
                message.innerHTML = "Congratulations! X is the Winner!";
                message.className = "you-won";
        }
        else if (el == "O"){
    
                //  for O
                message.innerHTML = "Congratulations! O is the Winner!";
                message.className = "you-won";
        }
    //part 5 
    var buttton = document.getElementsByClassName("btn")[0];
    buttton.onclick = function(){
        document.location.reload();
    }
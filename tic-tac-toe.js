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
movingMouse = (item) =>
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
        click_count++;
        console.log(game_state);
        winner(); 
    } 
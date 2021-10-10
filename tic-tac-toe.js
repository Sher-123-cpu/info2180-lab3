var xo = "O"
 var over =  0;

 window.onload = function() {

   
    this.Newgame()
    this.loadBoard()
    this.display_input()
    document.getElementById(square).onclick = function() {return};
    document.getElementsByClassName("btn")[0].onclick = function(){
        for(let i = 0; i < squares.length; i++){
            squares[i].innerHTML = ("")
        }
    document.getElementById("status").classList.remove("you-won")
    document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O."
    makeUnselectable(document.getElementById("status"))
    }
    
   
}  
   function loadBoard () {
        var squares = document.querySelectorAll("#board div");
        for (let a=0; a <= squares.length; a++){
            squares[a].classList.add("square");
            squares[a].onmouseover = function(){squares[a].classList.toggle("hover",true)}
            squares[a].onmouseout = function(){squares[a].classList.toggle("hover",false)}
            squares[a].onclick = function(){
                if ((squares[a].innerHTML === "")  && ( over != 1) ) {
                    if (xo === "O"){
                        xo = "X";
                         squares[a].classList.toggle("O",false)
                         squares[a].innerHTML = "X"
                         squares[a].classList.toggle("X",true)
                         checkBoard(squares)
                         
                    }else{
                            xo = "O";
                             squares[a].classList.toggle("X",false);
                             squares[a].innerHTML = "O"
                             squares[a].classList.toggle("O",true);
                             checkBoard(squares)
                           
                    }
            
                 }
            makeUnselectable(squares[a])
        }
    }
}
        function makeUnselectable(node) {
            if (node.nodeType == 1) {
                node.setAttribute("unselectable", "on");
            }
            var child = node.firstChild;
            while (child) {
                makeUnselectable(child);
                child = child.nextSibling;
            }
        }
        function checkBoard(arr){
            if (arr[0].innerHTML !== "" && arr[0].innerHTML === arr[1].innerHTML && arr[0].innerHTML === arr[2].innerHTML){
                over = 1
                document.getElementById('status').className = "you-won"
                document.getElementById('status').innerHTML =   "Congratulations! "+ arr[0].innerHTML + " is the Winner!"
            }
            else if (arr[3].innerHTML !== "" && arr[3].innerHTML === arr[4].innerHTML && arr[3].innerHTML === arr[5].innerHTML){
                over = 1
                document.getElementById('status').className = "you-won"
                document.getElementById('status').innerHTML = "Congratulations! "+ arr[3].innerHTML + " is the Winner!"
            }
            else if (arr[6].innerHTML !== "" && arr[6].innerHTML === arr[7].innerHTML && arr[6].innerHTML === arr[8].innerHTML){
                over =1
                document.getElementById('status').className = "you-won"
                document.getElementById('status').innerHTML = "Congratulations! "+ arr[6].innerHTML + " is the Winner!"
            }
            else if (arr[0].innerHTML !== "" && arr[0].innerHTML === arr[3].innerHTML && arr[0].innerHTML === arr[6].innerHTML){
                over =1
                document.getElementById('status').className = "you-won"
                document.getElementById('status').innerHTML = "Congratulations! "+ arr[0].innerHTML + " is the Winner!"
            }
            else if (arr[1].innerHTML !== "" && arr[1].innerHTML === arr[4].innerHTML && arr[1].innerHTML === arr[7].innerHTML){
                over = 1
                document.getElementById('status').className = "you-won"
                document.getElementById('status').innerHTML = "Congratulations! "+ arr[1].innerHTML + " is the Winner!"
            }
            else if (arr[0].innerHTML !== "" && arr[0].innerHTML === arr[4].innerHTML && arr[0].innerHTML === arr[8].innerHTML){
                over =1 
                document.getElementById('status').className = "you-won"
                document.getElementById('status').innerHTML = "Congratulations! "+ arr[0].innerHTML + " is the Winner!"
            }
            else if (arr[6].innerHTML !== "" && arr[6].innerHTML === arr[4].innerHTML && arr[6].innerHTML === arr[2].innerHTML){
                over =1
                document.getElementById('status').className = "you-won"
                document.getElementById('status').innerHTML =  "Congratulations! "+ arr[6].innerHTML + " is the Winner!"
            }
            else if (arr[2].innerHTML !== "" && arr[2].innerHTML === arr[5].innerHTML && arr[2].innerHTML === arr[8].innerHTML){
                over = 1
                document.getElementById('status').className = "you-won"
                document.getElementById('status').innerHTML = "Congratulations! "+ arr[2].innerHTML + " is the Winner!"
            }
        
        }

        function Newgame(){
            let newgame=document.getElementsByClassName("btn")[0];
            newgame.addEventListener("click",() => {
                window.location.reload();
            });
        }

     
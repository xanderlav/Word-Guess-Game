
    var vletter = "";  // Letter container
    var contWin = 0;   // Victory counter
    var contLos = 0;   // Defeat counter
    var contDrw = 0;   // Draw counter
    var keyCode = "";  // Key pressed by user
    var kyComp  = "";  // Key auto generated
    var gameCnt = 9;   // Game counter

function tecla(e){

    if (gameCnt > 0) {
        // declare var for computer key random
        kyComp = Math.floor(Math.random() * 255);

        if(event.keyCode > kyComp){
                contWin = contWin + 1;
                document.getElementById("winner_cont").innerText = "Wins so far:  " + contWin;
                document.getElementById("yourGuesses_cont").append(String.fromCharCode(event.keyCode) + ", ");
            } else if(event.keyCode < kyComp ){
                contLos = contLos + 1;
                document.getElementById("looser_cont").innerText = "Defeats so far: " + contLos;
            } else{
                contDrw = contDrw + 1;
            }
            
        // console.log("w: " + contWin + "\n" + "l: " + contLos + "\n" + "d: " + contDrw);
        // console.log(contDrw +"\n" + contLos + "\n" + contWin + "\n" + gameCnt);
        gameCnt--;
        document.getElementById("gamesLeft_cont").innerText = "Games left to play: " + gameCnt;
        }
    }





    
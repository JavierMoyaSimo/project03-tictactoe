

// // Funcion al darle click al boton de enviar (Datos PLAYER 1)
// FunctionSaveNameOne = () => {
//     // Guardo el valor de checked del boton radio Human del player 1
//     let radioHumanOneValue = document.getElementById("radioHuman1").checked;
//     // Guardo el valor de checked del boton radio CPU del player 1
//     let radioCpuOneValue = document.getElementById("radioCpu1").checked;
//     // Guardo el valor del input player 1
//     let buttonOne = document.getElementById("inputPlayerOne");
//     let saveName = buttonOne.value;
//     // Guardo el parrafo de arriba del input para posteriormente introducirle el nombre del Player 1.
//     let namePlayerOne = document.getElementById("namePlayerOne");
//     // Validacion de que todos los campos(input y radio(Human/CPU) esten rellenos)
//     if ((radioHumanOneValue == true) && (saveName != "")) {
//         // Guardo el valor del input 1 en localstorage
//         localStorage.setItem("nameOfPlayerOne", saveName);
//         // Guardo el valor del boton radioHuman1 en localstorage
//         localStorage.setItem("valueOfHuman1", radioHumanOneValue);
//         // Guardo el valor del boton radioCpu1 en localstorage
//         localStorage.setItem("valueOfCpu1", radioCpuOneValue);
//         // Introduzco en el parrafo el nombre del Player 1
//         namePlayerOne.innerHTML = ` Player 1 : ${saveName}`;
//         //Vacio el input player 1
//         buttonOne.value = "";
//     } else {
//         alert("Please, write your name and select Human . This is not possible select CPU in player 1.")
//     }
// }

// // Funcion al darle click al boton de enviar (Datos PLAYER 2)
// FunctionSaveNameTwo = () => {
//     // Guardo el valor de checked del boton radio Human del player 2
//     let radioHumanTwoValue = document.getElementById("radioHuman2").checked;
//     // Guardo el valor de checked del boton radio CPU del player 2
//     let radioCpuTwoValue = document.getElementById("radioCpu2").checked;
//     // Guardo el valor del input player 2
//     let buttonTwo = document.getElementById("inputPlayerTwo");
//     let saveNameTwo = buttonTwo.value;
//     // Guardo el parrafo de arriba del input para posteriormente introducirle el nombre del Player 2.
//     let namePlayerTwo = document.getElementById("namePlayerTwo");

//     // Validacion de que todos los campos(input y radio(Human/CPU) esten rellenos)
//     if ((radioHumanTwoValue == true || radioCpuTwoValue == true) && (saveNameTwo != "")) {
//         // Guardo el valor del input 2 en localstorage
//         localStorage.setItem("nameOfPlayerTwo", saveNameTwo);
//         // Guardo el valor del boton radioHuman2 en localstorage
//         localStorage.setItem("valueOfHuman2", radioHumanTwoValue);
//         // Guardo el valor del boton radioCpu2 en localstorage
//         localStorage.setItem("valueOfCpu2", radioCpuTwoValue);
//         // Introduzco en el parrafo el nombre del Player 2
//         namePlayerTwo.innerHTML = ` Player 2 : ${saveNameTwo}`;
//         //Vacio el input player 2
//         buttonTwo.value = "";
//     } else {
//         alert("Please, write your name and select if you are Human o CPU")
//     }
// }

// // Funcion para cambiar a play.html(HTML donde esta el propio juego) desde players.html con el boton Start
// ChangeWindow = () => {
//     if ((document.getElementById("namePlayerOne").innerHTML != "Player 1") && (document.getElementById("namePlayerTwo").innerHTML != "Player 2")) {
//         document.getElementById("startButton").href = "./play.html";
//     } else {
//         alert("Please fill in all the fields of the form")
//     }
// };

// // INFORMATION PANEL (play.html)

// //Recupero el nameOfPlayerOne del localStorage
// let name1 = localStorage.getItem("nameOfPlayerOne");
// // Recupero el nameOfPlayerTwo del localStorage
// let name2 = localStorage.getItem("nameOfPlayerTwo");
// // Recupero el tipo de jugador 1 (Human o CPU) y lo escribo en el Panel de Informacion
// let typePlayer1 = localStorage.getItem("valueOfHuman1");

// if (typePlayer1 == "true") {
//     var nameType1 = "HUMAN"; // Usamos var para que el foco sea general; asi ya estara definida fuera del if.
//     document.getElementById("nameP1").innerHTML = `Player 1:  ${name1} - ${nameType1} - X`;
// }


// // Recupero el tipo de jugador 2 (Human o CPU) y lo escribo en el Panel de Informacion
// let typePlayer2 = localStorage.getItem("valueOfHuman2");

// if (typePlayer2 == "true") {
//     var nameType2 = "HUMAN";
//     document.getElementById("nameP2").innerHTML = `Player 2:  ${name2} - ${nameType2} - O`;
// } else {
//     var nameType2 = "CPU";
//     document.getElementById("nameP2").innerHTML = `Player 2:  ${name2} - ${nameType2} - O`;
// };

// // OBETOS JUGADOR 1- JUGADOR 2
// // Creamos  CLASE Player
// class Player {
//     constructor(name, turn, type, symbol) {
//         this.name = name;
//         this.turn = turn;
//         this.type = type;
//         this.symbol = symbol;
//     };
// }
// //INSTANCIAMOS 2 Jugadores
// let player1 = new Player(name1, 0, nameType1, "X");
// let player2 = new Player(name2, 0, nameType2, "Y");

// // Declaro el turno del jugador que comienza el juego. 

// let turnoAleatorio = Math.floor(Math.random() * 99);
// let myTurn = true;

// if (player2.type == "CPU") {
//      myTurn = true;
//     document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
// } else {
//     if (turnoAleatorio % 2 == 0) {
//         myTurn = true;
//         document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}`;
//     } else {
//         myTurn = false;
//         document.getElementById("turnOf").innerHTML = `Turn of  ${player2.name}`;
//     }
// }


// // Funcion para comprobar si hay un ganador. Primero compruebo opciones player 1. || Después opciones player 2.
// const Winner = () => {

//     if ((casillas[0].innerHTML == "X") && (casillas[1].innerHTML == "X") && (casillas[2].innerHTML == "X") ||
//         (casillas[3].innerHTML == "X") && (casillas[4].innerHTML == "X") && (casillas[5].innerHTML == "X") ||
//         (casillas[6].innerHTML == "X") && (casillas[7].innerHTML == "X") && (casillas[8].innerHTML == "X") ||
//         (casillas[0].innerHTML == "X") && (casillas[3].innerHTML == "X") && (casillas[6].innerHTML == "X") ||
//         (casillas[1].innerHTML == "X") && (casillas[4].innerHTML == "X") && (casillas[7].innerHTML == "X") ||
//         (casillas[2].innerHTML == "X") && (casillas[5].innerHTML == "X") && (casillas[8].innerHTML == "X") ||
//         (casillas[0].innerHTML == "X") && (casillas[4].innerHTML == "X") && (casillas[8].innerHTML == "X") ||
//         (casillas[2].innerHTML == "X") && (casillas[4].innerHTML == "X") && (casillas[6].innerHTML == "X")) {
//         console.log("HAS GANADO JUGADOR 1")
//         setTimeout(() => { location.href = "winner.html"; }, 500);
//     } else if ((casillas[0].innerHTML == "O") && (casillas[1].innerHTML == "O") && (casillas[2].innerHTML == "O") ||
//         (casillas[3].innerHTML == "O") && (casillas[4].innerHTML == "O") && (casillas[5].innerHTML == "O") ||
//         (casillas[6].innerHTML == "O") && (casillas[7].innerHTML == "O") && (casillas[8].innerHTML == "O") ||
//         (casillas[0].innerHTML == "O") && (casillas[3].innerHTML == "O") && (casillas[6].innerHTML == "O") ||
//         (casillas[1].innerHTML == "O") && (casillas[4].innerHTML == "O") && (casillas[7].innerHTML == "O") ||
//         (casillas[2].innerHTML == "O") && (casillas[5].innerHTML == "O") && (casillas[8].innerHTML == "O") ||
//         (casillas[0].innerHTML == "O") && (casillas[4].innerHTML == "O") && (casillas[8].innerHTML == "O") ||
//         (casillas[2].innerHTML == "O") && (casillas[4].innerHTML == "O") && (casillas[6].innerHTML == "O")) {
//         console.log("HAS GANADO jugadorrr 2")
//         setTimeout(() => { location.href = "winner.html"; }, 500);;
//     }
// }

// // FUNCION QUE PINTA "X" o "O" en funcion del jugador que sea.
// //Capturamos en un array todos los elementos.
// let casillasObject = document.getElementsByClassName("letter"); // SECUESTRA un ARRAY entero con 9 posiciones ( 9 elementos que tienen la misma clase);

// let casillas = Array.from(casillasObject);
// console.log(casillas);

// // Hemos usado map porque nos permite tratar a cada elemento del array como un objeto(Propiedades + metodos).
// // JUEGO TICTACTOE. Para cada casilla del tablero que sea pulsada, y dependiendo de las condiciones, ocurrirá:
// casillas.map((casilla) => {
//     casilla.addEventListener("click", () => {
//         if ((casilla.innerHTML == "") && (player1.turn < 3) && (myTurn == true) && (player2.type != "CPU")) {//Casilla vacia/ tenga las 3 fichas/ turno jugador 1/ jugador 2 es HUMAN.
//             casilla.innerHTML = "X";
//             Winner();
//             player1.turn++
//             myTurn = !myTurn;
//             document.getElementById("turnOf").innerHTML = (myTurn) ? document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}` : `Turn of  ${player2.name}`;

//         } else if ((player1.turn >= 3) && (casilla.innerHTML == "X") && (myTurn == true) /*&& (player2.type != "CPU")*/) {// Casilla ocupada/ tiene 0 fichas/ turno jugadoor 1/ jugador 2 es HUMAN.
//             casilla.innerHTML = "";
//             Winner();
//             player1.turn--;
//         }
//         else if ((casilla.innerHTML == "") && (player2.turn < 3) && (myTurn == false) && (player2.type != "CPU")) {//Casilla vacia/ tenga las 3 fichas/ turno jugador 2/ jugador 2 es HUMAN.
//             casilla.innerHTML = "O";
//             Winner();
//             player2.turn++
//             myTurn = !myTurn;
//             document.getElementById("turnOf").innerHTML = (myTurn) ? document.getElementById("turnOf").innerHTML = `Turn of  ${player1.name}` : `Turn of  ${player2.name}`
//         }
//         else if ((player2.turn >= 3) && (casilla.innerHTML == "O") && (myTurn == false) && (player2.type != "CPU")) {// Casilla ocupada/ tiene 0 fichas/ turno jugador 2/ jugador 2 es HUMAN.
//             casilla.innerHTML = "";
//             Winner();
//             player2.turn--;
//         } 

//     })

// });
let position = Math.floor(Math.random()*10);

if((myTurn == false) && (player2.turn < 3) && (casillas[position].innerHTML == "") && (player2.type == "CPU")){
casillas[position].innerHTML = "O";
Winner();
player2.turn ++;
myTurn = true;
} else if ((myTurn == false) && (player2.turn >= 3 ) && (casillas[position].innerHTML == "O") && (player2.type == "CPU") ) {
casillas[position].innerHTML = "";
player2.turn --;
}



















/*else if ((casilla.innerHTML == "") && (player1.turn < 3) && (player2.type == "CPU")) {//Casilla vacia/ tenga las 3 fichas/ turno jugador 1/ jugador 2 es CPU.
            casilla.innerHTML = "X";
            Winner();
            functionCpu();

             
        } else if ((player1.turn >= 3) && (casilla.innerHTML == "X") && (player2.type == "CPU")) {  //Casilla ocupada/ tiene 0 fichas/ turno jugador 1/ jugador 2 es CPU.
            casilla.innerHTML = "";
            Winner();
            player1.turn--;

        }*/

        // while(casillas[i]== "") {
        //     i++;
            
        //     }
            
            
        //     // Meter el switch en la funcion cpu-3
        //     switch (casillas) {
        //         case [0]: 
        //         if(casillas[0] == ""){
            
        //         }
        //         break;
        //     }



            // let pulsarAleatorio = () => {
//     let resultat =  Math.floor(Math.random() * 10);
//     return resultat};



//     let valorar = (param1) => {
//         if(casillas[param1] != ""){
//             pulsarAleatorio()
//         }
//     }
// let result = pulsarAleatorio(); 

// console.log(result);

// console.log(casillas[result]);

//  let casillasCpu = casillas[result];

//  Array.prototype.indexOf()
// Devuelve el índice del primer elemento del array que sea igual a elementoBuscado, o -1 si no existe.
// Array.prototype.findIndex()
// Devuelve el índice del primer elemento del array que cumpla el predicado que se pasa como parámetro, o -1 si nunguno lo cumple.

//  let functionCpu = () => {
//     let popIndex = casillas.indexOf("O");
//     casillas[popIndex] = "";
//     player2.turn--;
//     Winner();
//     player2.turn++
    
//  }
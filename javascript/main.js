
// Funcion al darle click al boton de enviar (Datos PLAYER 1)
FunctionSaveNameOne = () => {

    // Guardo el valor de checked del boton radio Human del player 1
    let radioHumanOneValue = document.getElementById("radioHuman1").checked;

    // Guardo el valor de checked del boton radio CPU del player 1
    let radioCpuOneValue = document.getElementById("radioCpu1").checked;

    // Guardo el valor del input player 1
    let buttonOne = document.getElementById("inputPlayerOne");
    let saveName = buttonOne.value;

    // Guardo el parrafo de arriba del input para posteriormente introducirle el nombre del Player 1.
    let namePlayerOne = document.getElementById("namePlayerOne");
    // Validacion de que todos los campos(input y radio(Human/CPU) esten rellenos)
    if ((radioHumanOneValue == true || radioCpuOneValue == true) && (saveName != "")) {
        // Guardo el valor del input 1 en localstorage
        localStorage.setItem("nameOfPlayerOne", saveName);


        // Guardo el valor del boton radioHuman1 en localstorage
        localStorage.setItem("valueOfHuman1", radioHumanOneValue);


        // Guardo el valor del boton radioCpu1 en localstorage
        localStorage.setItem("valueOfCpu1", radioCpuOneValue);


        // Introduzco en el parrafo el nombre del Player 1
        namePlayerOne.innerHTML = ` Player 1 : ${saveName}`;


        //Vacio el input player 1
        buttonOne.value = "";
    } else {
        alert("Please, write your name and select if you are Human o CPU")
    }
}


// Funcion al darle click al boton de enviar (Datos PLAYER 2)
FunctionSaveNameTwo = () => {

    // Guardo el valor de checked del boton radio Human del player 2
    let radioHumanTwoValue = document.getElementById("radioHuman2").checked;

    // Guardo el valor de checked del boton radio CPU del player 2
    let radioCpuTwoValue = document.getElementById("radioCpu2").checked;

    // Guardo el valor del input player 2
    let buttonTwo = document.getElementById("inputPlayerTwo");
    let saveNameTwo = buttonTwo.value;

    // Guardo el parrafo de arriba del input para posteriormente introducirle el nombre del Player 2.
    let namePlayerTwo = document.getElementById("namePlayerTwo");
    // Validacion de que todos los campos(input y radio(Human/CPU) esten rellenos)
    if ((radioHumanTwoValue == true || radioCpuTwoValue == true) && (saveNameTwo != "")) {
        // Guardo el valor del input 2 en localstorage
        localStorage.setItem("nameOfPlayerTwo", saveNameTwo);

        // Guardo el valor del boton radioHuman2 en localstorage
        localStorage.setItem("valueOfHuman2", radioHumanTwoValue);

        // Guardo el valor del boton radioCpu2 en localstorage
        localStorage.setItem("valueOfCpu2", radioCpuTwoValue);


        // Introduzco en el parrafo el nombre del Player 2
        namePlayerTwo.innerHTML = ` Player 2 : ${saveNameTwo}`;


        //Vacio el input player 2
        buttonTwo.value = "";
    } else {
        alert("Please, write your name and select if you are Human o CPU")
    }
}

// Funcion para cambiar a play.html(HTML donde esta el propio juego) con el boton Start
ChangeWindow = () => {
    if ((document.getElementById("namePlayerOne").innerHTML != "Player 1") && (document.getElementById("namePlayerTwo").innerHTML != "Player 2")) {
        document.getElementById("startButton").href = "./play.html";
    } else {
        alert("Please fill in all the fields of the form")
    }
};


// INFORMATION PANEL (play.html)

//Recupero el nameOfPlayerOne del localStorage
let name1 = localStorage.getItem("nameOfPlayerOne");

// Recupero el nameOfPlayerTwo del localStorage
let name2 = localStorage.getItem("nameOfPlayerTwo");


// Recupero el tipo de jugador 1 (Human o CPU):

let typePlayer1 = localStorage.getItem("valueOfHuman1");
console.log(typePlayer1)
if (typePlayer1 == "true") {
    document.getElementById("nameP1").innerHTML = `Player 1:  ${name1} - HUMAN`;
} else {
    document.getElementById("nameP1").innerHTML = `Player 1:  ${name1} - CPU`;
}

// Recupero el tipo de jugador 2 (Human o CPU):

let typePlayer2 = localStorage.getItem("valueOfHuman2");

if (typePlayer2 == "true") {
    document.getElementById("nameP2").innerHTML = `Player 2:  ${name2} - HUMAN`;
} else {
    document.getElementById("nameP2").innerHTML = `Player 2:  ${name2} - CPU`;
}

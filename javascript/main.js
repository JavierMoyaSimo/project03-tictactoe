FunctionSaveNameOne = () => {
    let buttonOne = document.getElementById("inputPlayerOne");
    let radioHOne = document.getElementById("radioHuman1");
    let radioCOne = document.getElementById("radioCpu1");
    let SaveRadioHOne = radioHOne.value;
    let SaveRadioCOne = radioCOne.value;
    let SaveName = buttonOne.value;
    console.log(SaveName);
    console.log(SaveRadioHOne);
    console.log(SaveRadioCOne);
    localStorage.setItem("nameOfPlayerOne", SaveName);
    console.log(localStorage.getItem("nameOfPlayerOne"));
    buttonOne.value = "";
}

FunctionSaveNameTwo = () => {
    let buttonTwo = document.getElementById("inputPlayerTwo");
    let SaveNameTwo = buttonTwo.value;
    console.log(SaveNameTwo);
    localStorage.setItem("nameOfPlayerTwo", SaveNameTwo);
    console.log(localStorage.getItem("nameOfPlayerTwo"));
    buttonTwo.value = "";

}

// if((buttonOne.value != "") && (radioHOne != "undefined" || radioCOne != "undefined") ){
//     FunctionSaveNameOne();
// }
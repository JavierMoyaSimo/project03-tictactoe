FunctionSaveNameOne = () => {
    let buttonOne = document.getElementById("inputPlayerOne");
    let SaveName = buttonOne.value;
    console.log(SaveName);
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
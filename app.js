var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#Output");  



function clickHandler() {
    outputDiv.innerText = "kdvdvsvcsc" + txtInput.value;
}
btnTranslate.addEventListener("click", clickHandler)
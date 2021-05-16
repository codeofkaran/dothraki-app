var inputTxt = document.querySelector("#input");
var button = document.querySelector("#btn");
var outputTxt = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/dothraki.json"

function getTranslationURL(inputText){
    return url + "?" + "text=" + inputText  
}

function clickHandler(){
    var input = inputTxt.value;
    fetch(getTranslationURL(input))
    .then(response => response.json()) // Here we get the response in object form so we will convert it into JSON and pass it to output
    .then(json => outputTxt.innerText = json.contents.translated)
};

button.addEventListener("click", clickHandler);
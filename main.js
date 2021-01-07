//Function to find the words
import setText from '/automata.js';

//Variables
let data;
const input = document.querySelector('input');

console.log("Welcome to the word searcher");

//File reader
input.addEventListener('change', readFileAsText);

function readFileAsText(){
    let files = input.files;
    if(files.length == 0) return;

    const file = files[0];
    let reader = new FileReader();
    reader.onload = e => {
        data = e.target.result;
        setText(data);
    }
    reader.onerror = e => alert(e.target.error.name);
    reader.readAsText(file);
}


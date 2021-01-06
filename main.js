import search from '/automata.js';

console.log("Welcome to the word searcher");

let data;
const input = document.querySelector('input');

input.addEventListener('change', readFileAsText);

function readFileAsText(){
    let files = input.files;
    if(files.length == 0) return;

    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e)=>{
        data = e.target.result;
        var text = data;
        searchWords(data);
    }
    reader.onerror = (e)=>alert(e.target.error.name);
    reader.readAsText(file);
}

function searchWords (text){
    //console.log(text);
    for(let i = 0; i < text.length; i++){
        search(text[i])
    }
} 


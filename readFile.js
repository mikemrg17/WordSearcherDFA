let input = document.querySelector('input');
input.addEventListener('change', readFileAsText);
let data;
function readFileAsText(){
    let files = input.files;
    if(files.length == 0) return;

    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e)=>{
        data = e.target.result;
        for(let i = 0; i < data.length; i++){
            console.log(data[i]);
        }
    }
    reader.onerror = (e)=>alert(e.target.error.name);
    reader.readAsText(file);
}

export default data;




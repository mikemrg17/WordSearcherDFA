function search(index){
    if(index == state1.access){
        console.log("ACCEDIÓ AL ESTADO 1");
    }
}

let webCounter = 0;
let webayCounter = 0;
let ebayCounter = 0;
let elseCounter = 0;
let webMasterCounter = 0;
let webPageCounter = 0;
let currentState = 0;

let state1 = {
    name: "1",
    access: "w",
    neighbors: ["state2"]
}

let state2 = {
    name: "2",
    access: "e",
    neighbors: []
}

export default search;




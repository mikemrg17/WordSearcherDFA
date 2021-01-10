//Words COUNTERS
let webCounter = 0;
let weCounter = 0;
let webayCounter = 0;
let ebayCounter = 0;
let elseCounter = 0;
let webMasterCounter = 0;
let webPageCounter = 0;
let webSiteCounter = 0;

//PATH
let path;

//STATES
let state27 = {name: "1,5,27", access: "y", children: [], type: "finalState"}
let state26 = {name: "1,4,26", access: "a", children: [], type: "state"}
let state25 = {name: "1,25", access: "r", children: [], type: "finalState"}
let state24 = {name: "1,2,24", access: "e", children: [], type: "state"}
let state23 = {name: "1,23", access: "t", children: [], type: "state"}
let state22 = {name: "1,22", access: "s", children: [], type: "state"}
let state21 = {name: "1,21", access: "a", children: [], type: "state"}
let state20 = {name: "1,20", access: "m", children: [], type: "state"}
let state19 = {name: "1,2,19", access: "e", children: [], type: "finalState"}
let state18 = {name: "1,18", access: "g", children: [], type: "state"}
let state17 = {name: "1,17", access: "a", children: [], type: "state"}
let state16 = {name: "1,16", access: "p", children: [], type: "state"}
let state15 = {name: "1,2,15", access: "e", children: [], type: "finalState"}
let state14 = {name: "1,14", access: "t", children: [], type: "state"}
let state13 = {name: "1,13", access: "i", children: [], type: "state"}
let state12 = {name: "1,12", access: "s", children: [], type: "state"}
let state11 = {name: "1,3,11", access: "b", children: [], type: "finalState"}
let state10 = {name: "1,2,10", access: "e", children: [], type: "finalState"}
let state9 = {name: "1,9", access: "w", children: [], type: "state"}
let state8 = {name: "1,2,8", access: "e", children: [], type: "finalState"}
let state7 = {name: "1,7", access: "s", children: [], type: "state"}
let state6 = {name: "1,6", access: "l", children: [], type: "state"}
let state5 = {name: "1,5", access: "y", children: [], type: "finalState"}
let state4 = {name: "1,4", access: "a", children: [], type: "state"}
let state3 = {name: "1,3", access: "b", children: [], type: "state"}
let state2 = {name: "1,2", access: "e", children: [], type: "state"}
let state1 = {name: "1", access: "", children: [], type: "initialState"}

state27.children = [state2, state9];
state26.children = [state27, state2, state9];
state25.children = [state2,state9];
state24.children = [state25, state6, state3, state2, state9];
state23.children = [state24, state9];
state22.children = [state23, state2, state9];
state21.children = [state22, state2, state9];
state20.children = [state21, state2,state9];
state19.children = [state6, state3, state2, state9];
state18.children = [state19,state9];
state17.children = [state18, state2,state9];
state16.children = [state17, state2,state9];
state15.children = [state3, state6, state2,state9];
state14.children = [state15, state9];
state13.children = [state14, state2,state9];
state12.children = [state13, state2,state9];
state11.children = [state12, state16, state20, state26, state2, state9];
state10.children = [state11, state6, state2,state9];
state9.children = [state10,state9];
state8.children = [state9, state3, state6, state2];
state7.children = [state8, state9];
state6.children = [state7, state2,state9];
state5.children = [state2,state9];
state4.children = [state5, state2,state9];
state3.children = [state4, state2,state9];
state2.children = [state3, state6, state2,state9];
state1.children = [state2,state9];

//CURRENT STATE
/*Initial state is state1*/
let currentState;

//FUNCTIONALITY
let text;
let index;
/*Set the data received to a local variable*/
function setText(data){
    text = data;
    currentState = state1;
    index = 0;
    path = "path: 1";
    findWords(index, currentState);
}

function findWords(index, currentState){
    console.log("Estado actual: " + currentState.name);
    if(index == text.length-1){
        console.log(path);
        generateOutputFile(path);
        console.log("webCounter: " + webCounter);
        console.log("weCounter: " + weCounter);
        console.log("webayCounter: " + webayCounter);
        console.log("ebayCounter: " + ebayCounter);
        console.log("elseCounter: " + elseCounter);
        console.log("webMasterCounter: " + webMasterCounter);
        console.log("webPageCounter: " + webPageCounter);
        console.log("webSiteCounter: " + webSiteCounter);

        console.log("Process completed");
    }else{
        makeTransition(index, currentState);
    }
}

/*Function to make the transition from a state to another*/
function makeTransition(index,currentState){
    let transitionValidator = 0;
    let stateTransition;
    let position;

    if(isFinalState(currentState) == true){
        //console.log(currentState + " Es estado final");
        increaseWordsCounters(currentState);   
    }

    for(let c = 0; c < currentState.children.length; c++){
        if(text[index] == currentState.children[c].access){
            position = c;
            transitionValidator++;
            break;
        }
    }
    console.log("Hijo en posición del arreglo: " + position);
    console.log("Encontró hijos: 1 Si, 0 No: " + transitionValidator);
    if(transitionValidator > 0){
        currentState = currentState.children[position];
        console.log("Entra en: " + currentState.name);
        stateTransition = " -> " + currentState.name;
        path += stateTransition;
    }else{
        currentState = state1;
        stateTransition = " -> " + currentState.name;
        path += stateTransition;
    }

    findWords(++index,currentState);
}

/*Function to validate if the current state is final state type*/
function isFinalState(currentState){
    let finalStates = [state27, state25, state19, state15, state11, state10, state8, state5];
    let finalStateFlag = 0;
    for(let s = 0; s < finalStates.length; s++){
        if(currentState == finalStates[s]){
            finalStateFlag++;
        }
    }
    if(finalStateFlag > 0){
        return true;
    }else{
        return false;
    }
}

function increaseWordsCounters(currentState){
    if(currentState == state27){webayCounter++;}
    else if(currentState == state25){webMasterCounter++}
    else if(currentState == state19){webPageCounter++}
    else if(currentState == state15){webSiteCounter++}
    else if(currentState == state11){webCounter++}
    else if(currentState == state10){weCounter++}
    else if(currentState == state8){elseCounter++}
    else if(currentState == state5){ebayCounter++}
}

function generateOutputFile(path){
    generateFile.newFile(path);
} 

export default setText;




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
let state26 = {name: "1,4,26", access: "a", children: [state27], type: "state"}
let state25 = {name: "1,25", access: "r", children: [], type: "finalState"}
let state24 = {name: "1,2,24", access: "e", children: [state25], type: "state"}
let state23 = {name: "1,23", access: "t", children: [state24], type: "state"}
let state22 = {name: "1,22", access: "s", children: [state23], type: "state"}
let state21 = {name: "1,21", access: "a", children: [state22], type: "state"}
let state20 = {name: "1,20", access: "m", children: [state21], type: "state"}
let state19 = {name: "1,2,19", access: "e", children: [], type: "finalState"}
let state18 = {name: "1,18", access: "g", children: [state19], type: "state"}
let state17 = {name: "1,17", access: "a", children: [state18], type: "state"}
let state16 = {name: "1,16", access: "p", children: [state17], type: "state"}
let state15 = {name: "1,2,15", access: "e", children: [], type: "finalState"}
let state14 = {name: "1,14", access: "t", children: [state15], type: "state"}
let state13 = {name: "1,13", access: "i", children: [state14], type: "state"}
let state12 = {name: "1,12", access: "s", children: [state13], type: "state"}
let state11 = {name: "1,3,11", access: "b", children: [state12,state16,state20,state26], type: "finalState"}
let state10 = {name: "1,2,10", access: "e", children: [state11], type: "finalState"}
let state9 = {name: "1,9", access: "w", children: [state10], type: "state"}
let state8 = {name: "1,2,8", access: "e", children: [], type: "finalState"}
let state7 = {name: "1,7", access: "s", children: [state8], type: "state"}
let state6 = {name: "1,6", access: "l", children: [state7], type: "state"}
let state5 = {name: "1,5", access: "y", children: [], type: "finalState"}
let state4 = {name: "1,4", access: "a", children: [state5], type: "state"}
let state3 = {name: "1,3", access: "b", children: [state4], type: "state"}
let state2 = {name: "1,2", access: "e", children: [state3,state6], type: "state"}
let state1 = {name: "1", access: "", children: [state2,state9], type: "initialState"}


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
    path = "path: Incio";
    findWords(index, currentState);
}

function findWords(index, currentState){
    console.log(currentState.name);
    if(index == text.length-1){
        console.log(path);
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
        /*1. Validar si tiene hijos el estado*/
        if(hasChildren(currentState) == true ){
            //console.log("has children");
            /*2. Validar si es estado final o no */
            if(isFinalState(currentState) == true){
                console.log("Es estado final");
                increaseWordsCounters(currentState);

                for(let c = 0; c < currentState.children.length; c++){
                    if(text[index] == currentState.children[c].access){
                        //let currentStateChildren = currentState.children[c];
                        currentState = currentState.children[c];
                        //console.log(currentState.name);
                        let stateTransition = " -> " + currentState.name;
                        path += stateTransition;
                        break;
                    }
                }

            }else{
                console.log("No es estado final");
                for(let c = 0; c < currentState.children.length; c++){
                    if(text[index] == currentState.children[c].access){
                        //let currentStateChildren = currentState.children[c];
                        currentState = currentState.children[c];
                        //console.log(currentState.name);
                        let stateTransition = " -> " + currentState.name;
                        path += stateTransition;
                        break;
                    }
                }
            }
        }else{
            increaseWordsCounters(currentState);
            console.log("has NO children");
            console.log("Es estado final");
            //Estos siempre son estados finales
        }
        findWords(++index,currentState);
    }
}

/*Function to validate if the current state has children*/
function hasChildren(currentState){
    let childrenValidation;
    
    if(currentState.children.length < 1){
        childrenValidation = false;
    }else{
        childrenValidation = true;
    }
    
    return childrenValidation;
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

export default setText;




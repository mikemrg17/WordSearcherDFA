//COUNTERS
let webCounter = 0;
let webayCounter = 0;
let ebayCounter = 0;
let elseCounter = 0;
let webMasterCounter = 0;
let webPageCounter = 0;

//PATH
let path = "";

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
/*First, the initial state is state1*/
let currentState = state1;

//FUNCTION
function search(index){
    return;
}

export default search;




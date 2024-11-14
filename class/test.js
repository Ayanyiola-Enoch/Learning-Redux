const redux = require('redux');
const createStore = redux.createStore;

//INITIAL STATE
const initialState = {
    cake: 10,
    eggBuns:15,
    // email: "",
    // firstName: "",
    // todo: [],
};


//ACTION CREATOR
const orderCake = (enoch) => {
    return {
        type: "cake",
        enoch
    };
};
const restockCake = () => {
    return {
        type: "restockCake"
    };
};
const eggBuns = () => {
    return {
        type: "eggBuns"
    };
};



//REDUCER
const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "cake":
            {/*FIRST CASE- REMOVING CAKE*/ }
            return {
                ...state,
                cake: state.cake - action.enoch
            };
        case "restockCake":
            {/*FIRST CASE- ADD CAKE*/ }
            return {
                ...state,
                cake: state.cake + 1
            }
            case "eggBuns":
                return{
                    ...state,
                    eggBuns:state.eggBuns - 1

                }
        default:
            return state;
    };
};

//STORE
const store = createStore(cakeReducer);

console.log('enoch initial store', store.getState());

store.subscribe(() => {
    console.log('for checking', store.getState());
})

store.dispatch(orderCake(5));
store.dispatch(restockCake());

store.dispatch(eggBuns());
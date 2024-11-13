const redux = require('redux');
const createStore = redux.createStore;

//INITIAL STATE
const initialState = {
    cake: 10,
    email: "",
    firstName: "",
    todo: [],
};

//ACTION CREATOR
const orderCake = () => {
    return {
        type: "enter"
    };
};
const orderCake2 = () => {
    return {
        type: "move"
    }
}



//REDUCER
const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "enter":
            {/*FIRST CASE- REMOVING CAKE*/ }
            return {
                ...state,
                cake: state.cake - 1
            };
        case "move":
            {/*FIRST CASE- ADD CAKE*/ }
            return {
                ...state,
                cake: state.cake + 1
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

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

store.dispatch(orderCake2());
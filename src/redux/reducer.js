
import { ADD_FRUIT } from "./actionType";
const initState = {cart:[]};

export const fruitReducer = (state = initState,action) =>{

    switch(action.type){
        case ADD_FRUIT :
        return {...state,cart:[...state.cart,action.payload]}

        default :

        return state
    }



}
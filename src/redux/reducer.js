
import { ADD_FRUIT } from "./actionType";
const initState = {cart:[{id:1,fruit:"🍒",quantity : 3}]};

export const fruitReducer = (state = initState,action) =>{

    switch(action.type){
        case ADD_FRUIT :
        return {...state,cart:[...state.cart,action.payload]}

        default :
        return state
    }



}
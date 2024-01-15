import { ADD_FRUIT,DELETE_FRUIT,UPDATE_QUANTITY_FRUIT,INCREMENT_BY_ONE,DECREMENT_BY_ONE,CLEAR_ALL } from "./actionType"


// action creator of Fruits :
export const  addFruit = (id,fruit,quantity)=>{
    return {
        type : ADD_FRUIT,
        payload:{id:id,fruit:fruit,quantity:quantity}
    }
}
export const  deleteFruit = (id)=>{
    return {
        type : DELETE_FRUIT,
         payload:id
    }
}

export const updateQuantityFruit = (id,quantity)=> {
    return {
        type: UPDATE_QUANTITY_FRUIT,
        payload : {id:id,quantity:quantity}
    }
}

export const incrementByOne = (id) =>{
    return {
            type: INCREMENT_BY_ONE,
            payload :id
    }
}
export const decrementByOne = (id) =>{
    return {
        type:DECREMENT_BY_ONE,
        payload : id
    }
}
export const clearAll = () =>{
    return {
        type:CLEAR_ALL,

    }
}
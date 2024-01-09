import { ADD_FRUIT } from "./actionType"


// action creator of Fruits :
export const  addFruit = (id,fruit,quantity)=>{
    return {type : ADD_FRUIT,payload:{id:id,fruit:fruit,quantity:quantity}}
}
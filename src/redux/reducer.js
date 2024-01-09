
import { ADD_FRUIT, CLEAR_ALL, DECREMENT_BY_ONE, DELETE_FRUIT,INCREMENT_BY_ONE,UPDATE_QUANTITY_FRUIT } from "./actionType";
const initState = {cart:[]};

export const fruitReducer = (state = initState,action) =>{

    switch(action.type){
        case ADD_FRUIT :
        return {...state,
            cart : [...state.cart,action.payload]
        }

        case DELETE_FRUIT :
        return {...state,
            cart : state.cart.filter((item)=>item.id !== parseInt(action.payload))
        }

        case UPDATE_QUANTITY_FRUIT:
        return {...state,
            cart:state.cart.map(item => item.id === action.payload.id ? {...item,quantity:action.payload.quantity}:item )
        }
        case INCREMENT_BY_ONE :
            return {...state,
                cart : state.cart.map((item) => item.id === action.payload? {...item,quantity: item.quantity + 1}:item)
            }
        case DECREMENT_BY_ONE :
            return {...state,
                cart : state.cart.map((item) => item.id === action.payload? {...item,quantity:item.quantity - 1}:item)
            }
        case CLEAR_ALL :
            return {...state,
                cart : state.cart.map((item) => item.id === action.payload? {...item,quantity:0}:item)
            }
        default :
        return state
    }



}
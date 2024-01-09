
import './App.css'
import { ADD_FRUIT } from './redux/actionType';
import {legacy_createStore as createStore} from "redux"
import { fruitReducer } from './redux/reducer';
import { addFruit } from './redux/action';

// State Structure minumum require :

// const initState = {cart:[]};

// const myFruitsList = [
//   {fruitName: '🥥', id: 1},
//   {fruitName: '🫐', id: 2},
//   {fruitName: '🍉', id: 3},
//   {fruitName: '🍐', id: 4},
//   {fruitName: '🍒', id: 5},
//   {fruitName: '🍑', id: 6},
// ]
// Store Creation

const store = createStore(fruitReducer);

const unsubscribe = store.subscribe(()=>console.log(store.getState()))

store.dispatch({type:"ADD_FRUIT",payload:{id:1,fruit:'🫐',quantity:10}})
store.dispatch({type:"ADD_FRUIT",payload:{id:2,fruit:'🍉',quantity:10}})

store.dispatch(addFruit(12,'🍑',7))


// console.log(store.getState())

function App() {

  return (
    <>

      <ul>
        {store.getState().cart.map((item)=>(
          <li key={item.id}> the fruit is   {item.fruit} quantity is : {item.quantity}</li>
        ))}
      </ul>

    </>
  )
}

export default App

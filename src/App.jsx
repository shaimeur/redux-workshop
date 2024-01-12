
import './App.css'
import Cart from './components/Cart';
import AddFruits from './components/AddFruits';
// import { ADD_FRUIT } from './redux/actionType';
import {legacy_createStore as createStore} from "redux"
import { fruitReducer } from './redux/reducer';
import {Provider} from "react-redux"
// import { addFruit, deleteFruit,updateQuantityFruit,incrementByOne,decrementByOne,clearAll } from './redux/action';

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

const unsubscribe = store.subscribe(() => console.log(store.getState()))

// store.dispatch({type:"ADD_FRUIT",payload:{id:1,fruit:'🫐',quantity:10}})
// store.dispatch({type:"ADD_FRUIT",payload:{id:2,fruit:'🍉',quantity:10}})

// store.dispatch(addFruit(12,'🍑',2))
// store.dispatch(addFruit(1,'🫐',12))
// store.dispatch(addFruit(2,'🍉',8))
// store.dispatch(deleteFruit(12))
// store.dispatch(updateQuantityFruit(1,200))
// store.dispatch(incrementByOne(2))
// store.dispatch(decrementByOne(2))
// store.dispatch(clearAll(2))


// console.log(store.getState())

function App() {

  return (
    <>
    <Provider store={store}>
      <AddFruits/>
      <Cart/>
      {/* <ul>
        {store.getState().cart.map((item)=>(
          <li key={item.id}> the fruit is   {item.fruit} quantity is : {item.quantity}</li>
          ))}
      </ul> */}

    </Provider>

    </>
  )
}

export default App

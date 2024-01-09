
import './App.css'
// import { ADD_FRUIT } from './redux/actionType';
import {legacy_createStore as createStore} from "redux"
import { fruitReducer } from './redux/reducer';
import { addFruit } from './redux/action';

// State Structure minumum require :

// const initState = {cart:[]};


// Store Creation

const store = createStore(fruitReducer);
console.log(store.getState())

function App() {

  return (
    <>


    </>
  )
}

export default App

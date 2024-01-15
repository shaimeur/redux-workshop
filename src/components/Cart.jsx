import { useEffect,useState } from "react"
import {connect} from "react-redux"
import { incrementByOne ,decrementByOne } from "../redux/action"
const Cart = ({fruits,incrementItem,decrementItem}) =>{

 const [item,setItem] = useState({id:1,fruit:"",quantity:0})

    // useEffect(()=>{

    //     console.log(fruits)
    //     console.log(user)
    // })

    return (
        <div>
        <div className="m-5 p-2.5 w-96 border-green-400 rounded bg-gray-600">
            <h1> MyCart</h1>

            <div className="flex-auto flex-col">

                {fruits.map((item)=>(
                    <div key={item.id} className="w-52 mt-1 p-1 border-orange-400 bg-red-400 rounded">

                        <span className="inline-block w-16 border-indigo-900"> id: {item.id} product : {item.fruit} Qantity : {item.quantity} </span>
                        <button className="rounded bg-green-400 px-2" onClick={()=>incrementItem(item.id)}>+</button>
                        <button className="rounded bg-red-800 px-2"  onClick={()=>decrementItem(item.id)}>-</button>

                            </div>
                    ))}
            </div >
         </div>
    </div>
    )
}
const mapStateToProps = (state) =>{
    return {fruits : state.cart ,
            user : state.user  }
}

const mapDispatchToProps = (dispatch)=>{
   return {
    incrementItem : function(id){
        dispatch(incrementByOne(id))
    },
    decrementItem : function(id){
        dispatch(decrementByOne(id))
    }
   }

}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
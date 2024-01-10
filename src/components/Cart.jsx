import { useEffect } from "react"
import { connect } from "react-redux"

const Cart = ({fruits,dispatch,users}) =>{


    useEffect(()=>{
        console.log(fruits)
        console.log(users)
        console.log(dispatch)
    })
    return(
    <div>
        <div className="m-5 p-2.5 w-96 border-green-400 rounded bg-gray-600">
        <h1> MyCart</h1>

        <div className="flex-auto flex-col">

            {fruits.map((item)=>(
                <div key={item.id} className="w-52 mt-1 p-1 border-orange-400 bg-red-400 rounded">
                      <span className="inline-block w-16 border-indigo-900"> id: {item.id} {item.fruit} {item.quantity} </span>
                        </div>
                ))}
        </div >
                </div>
    </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        fruits:state.cart,
        users : state.user
    }
}

export default connect(mapStateToProps,null)(Cart)
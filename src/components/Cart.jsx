import { useEffect } from "react"
import { connect } from "react-redux"

const Cart = (props) =>{
    useEffect(()=>{
        console.log(props)
    })
    return(
    <div>
        <h1>Hello from Cart</h1>
    </div>
    )
}

const mapStateToProps = (state) =>{
    return {fruits:state.cart}
}

export default connect(mapStateToProps,null)(Cart)
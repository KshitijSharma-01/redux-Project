import Home from "../component/Home";
import {connect} from "react-redux"
import {addToCart} from "../service/action"

const mapDispatchToProps = dispatch=>({
    addToCartEvent:data=>dispatch(addToCart(data))
})

const mapStateToProps = state=>({
    data:state.cartItem
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)

// export default Home;
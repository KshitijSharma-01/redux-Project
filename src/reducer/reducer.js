import { Add_To_Cart } from "../constant";

export function cartItem(state = [], action) {
    console.log("reducer data :",action)
    switch (action.type) {
        case Add_To_Cart: {
            return [
                ...state,
                {cartData: action}
            ]
        }break
         
        default: {
            return state
        }
    }
}
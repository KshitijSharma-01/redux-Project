import { Add_To_Cart } from "../constant"

export const addToCart = (data) => {
    console.log("Action Data:",data)
    return {
        type: Add_To_Cart,
        data: data
    }
}
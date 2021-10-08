import { useContext } from "react";
import {CartContext} from "../providers/cart"
import {CatalogueContext} from "../providers/catalogue"

const Button = ({type, item}) => {
    const {addCart, removeFromCart} = useContext(CartContext)
    const {addCatalogue, removeFromCatalogue} = useContext(CatalogueContext)
    const text = type === "catalogue" ? "Ass to cart" : "Remove from cart"
    const handleClick = () => {
        if(type === "catalogue") {
            removeFromCatalogue(item)
            addCart(item)
        }else{
            removeFromCart(item)
            addCatalogue(item)
        }
    }

    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

export default Button
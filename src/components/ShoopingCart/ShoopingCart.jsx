import "./ShoopingCart.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from "../../context/cartContext";

const ShoopingCart = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return (
        <div className="ShoopingCart">
            <Link to='/cart'>
                <i className="fas fa-cart-plus"></i>
                <h6>{quantity}</h6>
            </Link>
        </div>
    )
}

export default ShoopingCart
import "./CardSelected.css"
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/cartContext"
import { useContext, useState } from "react"
import ItemCount from '../ItemCount/ItemCount';

const CardSelected = ( { id, img, company, name, console, genre, stock, price } ) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem, getProductQuantity } = useContext(CartContext)
    
    const originalQuantity = getProductQuantity(id)
    
    const addProduct = (quantity) => {
        setQuantity(quantity)
        addItem({id, name, price, quantity})
    }

    return (
        <div className="card-selected-container">
            <div className="card-selected-portrait">
                <img src={img} alt={name} className="card-img" />
            </div>
            <div className="card-selected-info">
                <h5 className="card-name">
                    {name}
                </h5>
                <h6 className="card-genre">
                    {genre}
                </h6>
                <h5 className="card-company">
                    {company}
                </h5>
                <h6 className="card-console">
                    {console}
                </h6>
                
            </div>

            <div>
            { quantity > 0 ? <Link to='/cart' className="button_detalle">Ir al carrito</Link> : <ItemCount stock={stock} initial={originalQuantity} onAdd={addProduct}/>}
            </div>
        </div>
    )
}

export default CardSelected
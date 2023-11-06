import { createContext, useState  } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        console.log(productToAdd)
        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return productUpdated
                } else {
                    return prod
                }
            })

            setCart(cartUpdated)
        }
        showCart()
    }

    const getQuantity = () => cart.reduce((total, prod) => (total += prod.quantity), 0);

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }

    const showCart = () => {
        console.log(cart)
    }

    const removeProduct = (id) => {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }

    const getTotal = () => cart.reduce((total, prod) => (total += prod.quantity * prod.price), 0);

    return(
        <CartContext.Provider value={{cart, addItem, isInCart, clearCart, getProductQuantity, removeProduct, getTotal, getQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
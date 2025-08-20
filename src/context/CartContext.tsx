import { createContext, useContext, useState, type ReactNode } from "react";

type CartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type CartContext = {
    getItemQunatity: (id: number) => number
    increaseCartQunatity: (id: number) => void
    decreaseCartQunatity: (id: number) => void
    removeFromCart: (id: number) => void
}

const CartContext = createContext({})

export function useCart(){
    return useContext(CartContext)
}

export function CartProvider({ children }: CartProviderProps){
    const[cartItems, setCartItems] = useState<CartItem[]>([])
    
    function getItemQunatity(id: number){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQunatity(id: number){
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null){
                return [...currItems, {id, quantity:1 }]
            }else{
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    }else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number){
      setCartItems(currItems => {
        return currItems.filter(item => item.id != id)
      })  
    }

    function decreaseCartQunatity(id: number){
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity == null){
                return currItems.filter(item => item.id !== id)
            }else{
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    }else {
                        return item
                    }
                })
            }
        })
    }

    return(
        <CartContext.Provider value={{ getItemQunatity, increaseCartQunatity, decreaseCartQunatity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}


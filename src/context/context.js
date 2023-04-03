import React, {useState, useEffect, useContext, useReducer} from 'react'
import cartItems from '../data';
import reducer from '../reducer/reducer'

const AppContext = React.createContext();

const initialState ={
    cart: cartItems,
    // total: 0,
    // amount:0
}

const AppProvider =({children}) =>{
    // const [cart, setCart] = useState(cartItems);
    const [state, dispatch] = useReducer(reducer, initialState)

    const clearCart = ()=>{
        dispatch({type: 'CLEAR_CART'})
    }

    const remove = (id)=>{
        dispatch({type: 'REMOVE', payload:id})
    }

    const increase = (id)=>{
        dispatch({type: 'INCREASE', payload:id})
    }

    const decrease = (id)=>{
        dispatch({type: 'DECREASE', payload:id})
    }

    useEffect(()=>{
        dispatch({type: 'CALCULATE_TOTALS'})
    }, [state.cart])

    return(
        <AppContext.Provider value = {{...state, clearCart, remove, increase, decrease}}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext, AppProvider};


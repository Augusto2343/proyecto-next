"use client"

import { createContext,useState } from "react";
import { db } from "../firebase/config";
import { addDoc,collection } from "firebase/firestore";
export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const [ cart, setCart] = useState([])

    const addItem = async (id) =>{
        let product= cart.find(item => item.id == id); 
        console.log(product);
        
        if(product) {
            product.quantity += 1;
            setCart([...cart])
        }
        else{
           
            const response = await fetch("http://localhost:3000/api/producto/"+ id)
            const item =await  response.json()
            product= {...item, quantity:1};
            setCart([...cart,product]);
        }
        
        
    }
    const deleteItem = (id) =>{
        const items = cart.filter(item => item.id != id)
        setCart([...items])
        console.log("se elimino el producto #",id);
        
    }
    const clearCart = () =>{
        setCart ([])
    }
    const totalItems = () =>{
            return cart.reduce((acum,item) => acum += item.quantity, 0);
    }
    const sumItem = () =>{
        const total= cart.reduce((acum, item) => acum += item.precio * item.quantity,0)
        console.log(total);
        
        return total
    }
    const generateOrder = async(nombre,email,telefono) =>{
        const buyer = {nombre,email,telefono};
        const items = cart.map(item => ({
            id: item.id,
            nombre: item.titulo,
            precio: item.precio,
            cantidad: item.quantity
        }));
        const fecha = new Date();
        const fechaActual = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const order = {buyer:buyer, items:items, date:fechaActual,total:sumItem()}
        console.log(order);
        const pedidosCollection= collection(db,"pedidos");
        const result = await addDoc(pedidosCollection,order);
        return result.id;
         
    }
    return <CartContext.Provider value ={{cart,addItem,deleteItem,clearCart,totalItems,sumItem,generateOrder}}>
            {children}
    </CartContext.Provider>
}
export default CartContextProvider
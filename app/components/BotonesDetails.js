"use client"
import Boton from "./Boton"
import { useRouter } from "next/navigation"
import { CartContext } from "../context/CartContext"
import { useContext, useEffect, useState } from "react"
const BotonesDetails = ({id}) =>{
    const router = useRouter()
    const agregarAlCarrito =(id) =>{
                addItem(id);
                setVisible(false)
        }
    useEffect(() =>{
        console.log(id);
        
    },[])
    const {addItem} = useContext(CartContext)
    const [visible, setVisible] = useState(true)
        return(
            visible?
            <Boton onClick={() =>agregarAlCarrito(id)}>Agregar al carrito </Boton>
            :
            <Boton onClick={() => router.replace("/cart")}>Ir al carrito</Boton>

        )
        
}
export default BotonesDetails
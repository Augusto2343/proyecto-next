"use client"

import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useRouter } from "next/navigation";
import Boton from "../components/Boton";

const Checkout =() =>{
   const {cart,sumItems,clearCart, totalItems,generateOrder} = useContext(CartContext);
   const router = useRouter();
   const [nombre,setNombre]= useState("");
   const [email,setEmail] = useState("");
   const [telefono,setTelefono] = useState("");
   const [orderId,setOrderId] = useState("");

    const handleSubmit = async(e) =>{
    e.preventDefault();
    let idDeOrden= await generateOrder(nombre,email,telefono);
    console.log(idDeOrden);
    
    setOrderId(idDeOrden);
    console.log("Se creó el carrito con el Id "+ orderId);

   }
   if(orderId != ""){
    return(
        <div className="w-screen h-screen flex flex-col items-center content-center">
            <h1 className="text-2xl text-gray-200">Gracias por su compra!</h1>
            <h2 className="text-xl text-gray-200">Su ID de compra es <b>{orderId}</b></h2>
            <Boton onClick ={() => {router.replace("/")}}>Ir a la página principal</Boton>
        </div>
    )
   }
   if(cart.length ==0){
    return(
        <div className="w-screen h-screen flex flex-col items-center content-center">
            <h1 className="text-2xl text-gray-200">El carrito está vacío</h1>
            <Boton onClick={()=> {router.replace("/")}}>Ir a la página principal</Boton>
        </div>
    )
   }

    return(
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <h1 className="text-gray-200 text-2xl mb-10 mt-10">Checkout</h1>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={nombre}onInput={(e) =>{setNombre(e.target.value)}} />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={email}onInput={(e) =>{setEmail(e.target.value)}} />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="number" name="floating_number" id="floating_number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={telefono}onInput={(e) =>{setTelefono(e.target.value)}} />
                <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Number</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    )
}
export default Checkout;
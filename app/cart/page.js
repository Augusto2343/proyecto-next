"use client"
import { useContext,useState } from "react"
import Boton from "../components/Boton"
import { useRouter} from "next/navigation"
import Link from "next/link"
const { CartContext } = require("../context/CartContext")

const Cart =() =>{
    const router = useRouter()
    const {cart,addItem,deleteItem,clearCart,totalItems,sumItem} = useContext(CartContext)

  const [open, setOpen] = useState(true);
    if(cart.length ==0){
      return(
        <div className="w-screen h-screen flex flex-col  items-center justify-center">
            <h1 className="text-3xl text-gray-200">No hay productos en el carrito</h1>
            <Boton onClick={() =>{ router.replace("/")}}>Volver al inicio</Boton>
        </div>
      )
    }
  return (
    <div className="vistaProducto flex flex-col items-center justify-center">

        
        {
        cart.map(item =>(
            <div key={item.id}  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={item.imagen} alt=""/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.titulo}</h5>
                    <p className="mb-3 font-normal flex flex-row items-center text-gray-700 dark:text-gray-400">Cantidad: {item.quantity} </p>
                    <p className="mb-3 font-normal flex flex-row items-center text-gray-700 dark:text-gray-400">Precio X unidad: ${item.precio} </p>
                </div>
                <div className="flex flex-col">
                  <button onClick={() =>{deleteItem(item.id)}} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray={24} strokeDashoffset={24} d="M12 20h5c0.5 0 1 -0.5 1 -1v-14M12 20h-5c-0.5 0 -1 -0.5 -1 -1v-14"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"></animate></path><path strokeDasharray={20} strokeDashoffset={20} d="M4 5h16"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="20;0"></animate></path><path strokeDasharray={8} strokeDashoffset={8} d="M10 4h4M10 9v7M14 9v7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></animate></path></g></svg>
                  </button>

                </div>
            </div>
        ))
        }
        
      <div className="flex flex-row gap-10  items-center">
          <h2 className="text-gray-200 text-xl">Total a pagar: <b>${sumItem()}</b></h2>
          <button onClick={clearCart} className=" flex flex-row gap-10 items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
            Vaciar el carrito
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray={24} strokeDashoffset={24} d="M12 20h5c0.5 0 1 -0.5 1 -1v-14M12 20h-5c-0.5 0 -1 -0.5 -1 -1v-14"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"></animate></path><path strokeDasharray={20} strokeDashoffset={20} d="M4 5h16"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="20;0"></animate></path><path strokeDasharray={8} strokeDashoffset={8} d="M10 4h4M10 9v7M14 9v7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></animate></path></g></svg>
          </button>
        </div>
        <Link href={"/checkout"} className=" flex flex-row gap-10 items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
            Ir al checkout
                
          </Link>
    </div>
    
  );
}

export default Cart
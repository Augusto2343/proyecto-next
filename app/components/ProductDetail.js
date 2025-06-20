"use client"
import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useRouter } from "next/navigation";
import BotonesDetails from "./BotonesDetails";
const ProductDetail = ({item}) =>{
    const router = useRouter()
    const agregarAlCarrito =(id) =>{
            addItem(id);
            setVisible(false)
    }
    return(
        <div className="conatiner">
            <div className=" flex flex-row items-center justify-between w-screen mb-10 mt-10 p-10">
                <Link href={"/productos/"+item.categoria} aria-label="Volver atrás">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                </svg>
                </Link>
                <h2 className="text-4xl text-gray-900 dark:text-white">{item.titulo}</h2>
            </div>
            <div className="container flex flex-row gap-10">
                <img src={item.imagen} />
                <div className="flex flex-col">
                <h2 className="text-2xl mb-10">{item.titulo}</h2>
                <p className="text-white ">{item.descripcion}</p>
                <BotonesDetails id={item.id}></BotonesDetails>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;
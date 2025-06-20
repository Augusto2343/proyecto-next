"use client"
import { useEffect, useState } from "react";
import MenuProduct from "./productMenu";
import Logo from "./Logo";
import Link from "next/link";
const Menu = () =>{
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() =>{
        console.log(isOpen);
        
    },[isOpen])
    const handleOpen= () =>{
        setIsOpen(true)
        console.log(isOpen);
        
    }
    const handleClose =() =>{
        setIsOpen(false)
    }


    return(    
    <>
    

    <aside className="  display-flex  flex-row size-auto fixed top-0 right-0">
    <div className=" navbarToggle max-w-screen-xl flex flex-row flex-wrap size-auto items-center justify-between mx-auto p-4 fixed top-0 ">
        
        <button data-collapse-toggle="navbar-hamburger" type="button" className={`navbarToggle inline-flex items-center justify-self-end justify-center fixed top-5  p-2 w-10 h-10  text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`} aria-controls="navbar-hamburger" aria-expanded="false" >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full flex flex-row mt-10 ml-10 align-center gap-5" id="navbar-hamburger"> 
        <MenuProduct isOpen={isOpen} handleClose={handleClose}></MenuProduct>
        <ul className="flex flex-col font-medium mt-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <li>
            <Link href={"/"} className="block py-2 px-3 text-white bg-blue-700 rounded-sm dark:bg-blue-600" aria-current="page">Home</Link>
            </li>
            <li>
            <Link href={"/nosotros"} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Nosotros</Link>
            </li>
            <li>
            <button className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white" onClick={handleOpen}>Productos</button>
            </li>
            <li>
            <Link href={"/cart"} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Carrito</Link>
            </li>
            <li>
            <Link href={"/admin"} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Administrador</Link>
            </li>
            <li>
                
            </li>
        </ul>

        </div>        
    </div>
  
  </aside>
  </>


)
}
export default Menu;
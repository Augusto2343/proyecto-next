"use client"
import Menu from "./Menu";
import Logo from "./Logo";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";
const Header = () => {
    useEffect(()=>{
        initFlowbite()
    },[])
    return (
        <header className="relative w-full ">
        <nav className=" relative bg-white border-gray-200 dark:bg-gray-800 opacity-80 content-center p-[30px] z-999 hover:opacity-100">
            <Logo className="fixed top-0 left-3"/>
            <Menu/>
        </nav>
        </header>
    
    );

}
export default Header;
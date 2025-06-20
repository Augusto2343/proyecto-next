"use client"
import Boton from "@/app/components/Boton"
import { useRouter } from "next/navigation"
import { useEffect } from "react";
const Error = ({error,reset}) =>{
    const router = useRouter();
    useEffect(() =>{
        console.log("eieieii");
        
    },[error])
    return(
        <div className="container m-auto flex flex-col my-20">
            <h1 className="text-3xl font-black mb-5">Error en la Página!</h1>
            <h3 className="text-3xl font-black mb-5">Por favor, intente de nuevo en unos minutos</h3>
            <Boton onClick={() => {router.replace("/")}}>Ir a la pagina principal</Boton>
        </div>
    )
}
export default Error;
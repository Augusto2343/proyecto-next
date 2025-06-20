

import { Suspense } from "react";
import ProductList from "@/app/components/ProductList";

export async function generateMetadata ({params, searchParams},parent){
    let {categoria} = await params;
    categoria = categoria =="all" ? "Productos" :categoria;
    return{
        title: `${categoria} | GMC`
    }
    
}
export async function  generateStaticsParams() {    
    return[
        {categoria:"all"},
        {categoria:"suv"},
        {categoria:"pick-up"}
    ]
}
const Productos = async ({params}) =>{
    const {categoria} = await params;
    return(
        <>
        <Suspense fallback={<div class="flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" role="alert">
                            <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                            </svg>
                            <span class="sr-only">Info</span>
                            <div>
                                <span class="font-medium">Lo sentimos</span> Vuelva a cargar la página de nuevo.
                            </div>
                            </div>}/>

        <Suspense fallback={<div class="flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" role="alert">
                <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="sr-only">Cargando</span>
                <div>
                    <span class="font-medium">Cargando</span> Estamos cargando nuestros productos ideales para vos
                </div>
                </div>}
                ></Suspense>
        <ProductList categoria={categoria}></ProductList>
        </>
    );
    }
export default Productos;
import Link from "next/link";
import ProductCard from "./ProductCard";
const ProductList = async ({categoria}) =>{
    const response = await fetch("https://proyecto-gmc.vercel.app/api/productos/" + categoria,
        {cache:"no-store"

        });
    const items = await response.json();
    
    
    return(
        <>
        <div className=" flex items-center content-center flex-col w-full">
            <div className=" flex flex-row items-center justify-between w-screen mb-10 mt-10 p-10">
                <Link href={"/"} aria-label="Volver atrás">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                </svg>
                </Link>
                <h2 className="text-4xl text-gray-900 dark:text-white">{`${categoria == "all"? "Todos los autos": categoria == "suv" ? "Suvs":"Pick-ups"}`}</h2>
            </div>
        <div className=" flex flex-row flex-wrap m-auto w-screen gap-10 justify-center">
            {
                items.map(item =>(
                    <ProductCard key={item.idx} item={item}></ProductCard>
                ))
            }
        </div>
        </div>
        </>
    )
}
export default ProductList; 
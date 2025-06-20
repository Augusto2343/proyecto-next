
import ProductCard from "./MainProductCard";
import Link from "next/link";
const MenuList = ({isOpen,handleClose}) =>{
   const items =[
    {   name:"suv",
        title:"Suvs",
        image:"https://www.gmc.com/content/dam/gmc/na/us/english/index/vehicles/2025/suvs/acadia/overview/trims/2025-acadia-elevation-779x394.png?imwidth=2400"},
    {
         name:"pick-up",
        title:"Pick ups",
        image:"https://www.gmc.com/content/dam/gmc/na/us/english/index/vehicles/2025/trucks/sierra-hd/overview/jellies/2025-sierra-2500-den-ult-titanium-rush-metallic-1000x563.png?imwidth=1920"
    },
   ] 
    return(
        
            <div className={`${!isOpen?"header-catalogue w-full z-0 hidden" : "header-catalogue flex-col z-100 justify-center items-center flex"}`}>
               <button type="button"  onClick={handleClose} className="self-start text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">X</button>
                <div className="categories justify-center flex flex-col w-full gap-5">
                        <ProductCard items={items}/>
                    <Link href={"/productos/all"} className="self-start text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Ver todo el catalogo</Link>
                </div>
                
            </div>
        
    )
}
export default MenuList;
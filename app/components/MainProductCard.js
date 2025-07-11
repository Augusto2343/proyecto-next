"use client"
import Link from "next/link"
const ProductCard = ({items}) =>{
    return(
        

        items.map((item,index)=>(
        <Link href={`/productos/${item.name}`}  key={index} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg max-w-30" src={item.image} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
            </div>
        </Link>

        ))
    )
}
export default ProductCard
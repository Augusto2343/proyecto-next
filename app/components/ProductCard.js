"use client"
import Link from "next/link"
import Boton from "./Boton"
import { useRouter } from "next/navigation"
const ProductoCard = ({item}) =>{
    const router = useRouter();
        return(
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <Link href={""}>
                    <img className="rounded-t-lg" src={item.imagen} alt={item.titulo} />
                </Link>
                <div className="p-5">
                    <Link href={""}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.titulo}</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.descripcion}</p>
                    <Boton onClick={() => {router.replace("/producto/" + item.id)}}>
                        Ver detalles
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Boton>
                </div>
            </div>

        )
}
export default ProductoCard;
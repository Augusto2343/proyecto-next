"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Boton from "../components/Boton";
import Image from "next/image";


const ListPage = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/api/productos/all")
            .then((res) => {
                if (!res.ok) throw new Error("Error al cargar los productos");
                return res.json();
            })
            .then(setItems)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div className="text-center py-20">Cargando productos...</div>;
    if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

    return (
        <div className="container m-auto flex flex-col my-20">
            <table>
                <tbody>
                    <tr>
                        <td colSpan={6} className="px-6 py-4 text-end"><Link href={"/admin/create"} >Agregar</Link></td>
                    </tr>
                    {
                        items.map(item => (
                            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <td className="px-6 py-4">
                                    <Image src={item.imagen} alt={item.titulo} width={80} height={80} style={{objectFit: 'cover'}} />
                                </td>
                                <td className="px-6 py-4">{item.titulo}</td>
                                <td className="px-6 py-4">{item.descripcion}</td>
                                <td className="px-6 py-4">${item.precio}</td>
                                <td className="px-6 py-4">{item.categoria}</td>
                                <td className="px-6 py-4 text-end"><Boton>Editar</Boton> <Boton>Eliminar</Boton></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListPage
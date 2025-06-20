"use client"

import { db, storage } from "@/app/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import Boton from "@/app/components/Boton";
import { getDownloadURL,ref ,uploadBytes } from "firebase/storage";
const CreateProduct = () =>{
    const [titulo, setTitulo] = useState("HUMMER EV 2025");
    const [descripcion, setDescripcion] = useState("HUMMER EV 2025");
    const [precio, setPrecio] = useState(122200);
    const [imagen, setImagen] = useState("")
    const [categoria, setCategoria] = useState("suv");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(categoria);
        
        if(!imagen) return alert("No hay imagen seleccionada");
        const product = {titulo,descripcion,precio,imagen,categoria};
        const productosRef= collection(db,"productos");
        const filenName = imagen.name;
        const storageRef= ref(storage,filenName);
        const metadata = {contentType: 'image/avif'};
        const fileSnapshot = await uploadBytes(storageRef, imagen,metadata);
        const fileUrl = await getDownloadURL(fileSnapshot.ref);
        addDoc(productosRef, {...product,imagen:fileUrl})
        console.log(product);
        return(
            alert("Producto subido la url de la imagen es:",fileUrl)
        )
    }
    return(
                <div className="container m-auto flex flex-col my-20">
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit} method="post" >
                <h1 className="text-3xl font-black mb-5">Cargar Producto</h1>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Título"  required  value={titulo} onInput={(e) => {setTitulo(e.target.value)}} />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Descripción"  required  value={descripcion} onInput={(e) => {setDescripcion(e.target.value)}} />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                    <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Precio"  required  value={precio} onInput={(e) => {setPrecio(e.target.value)}} />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagen</label>
                    <input type="file" accept="image/avif" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Imagen"  required  onInput={(e) => {setImagen(e.target.files[0])}} />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoría</label>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={categoria} onChange={(e) => {setCategoria(e.target.value)}}>
                        <option value={"suv"}>Suv</option>
                        <option value={"pick-up"}>Pick-Up</option>
                    </select>
                </div>
                <Boton type="submit">Enviar</Boton>
            </form>
        </div>
    )
 }
 export default CreateProduct
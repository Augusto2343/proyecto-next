"use client"
import { AuthContext } from "@/app/context/AuthContext";
import { useContext, useState } from "react";
import Boton from "@/app/components/Boton";
const LoginPage = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [registrar, setRegistrar] = useState("");
    const {user,logInUser,createUser,googleLogin} = useContext(AuthContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const values = {email,password}
        console.log(values);
        if(values.password.length <= 6){
            setError("La contraseña tiene que ser mayor a 6 carácters")
        }
        else{
        registrar ? createUser(values) : logInUser(values);
        setError(user.logged ? "" : "Ingrese los datos del usuario y contraseña correctamente")
        }
        
    }
    const registrarme = () =>{
        setRegistrar(true);
    }
    return(
            <div>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <h1 className="text-3xl font-black mb-5">{registrar ? "Registrar usuario" : "Iniciar sesión"}</h1>
            <div className="mb-5">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="tuCorreo@gmail.com" required value={email} onInput={(e) =>{ setEmail(e.target.value)}} />
            </div>
            <div className="mb-5">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={password} onInput={(e) =>{ setPassword(e.target.value)}}/>
            </div>
            
            <div className=" flex flex-row items-center justify-center">
                <Boton type="submit">{registrar? "Registrar usuario" : "Iniciar sesión"}</Boton>
            
            
                <Boton onClick={registrarme}>Registrarme</Boton>
            </div>
            <div className=" flex flex-row items-center justify-center">
                <Boton onClick={googleLogin}>Registrarme con Google</Boton>
            </div>
            </form>
                    {error ? <div className="p-4 my-5 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 text-center" role="alert"><span className="font-medium">Error!</span> {error}</div> : ""}
        </div>

    )
}
export default LoginPage
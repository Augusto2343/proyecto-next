"use client"
import { useRouter } from "next/navigation"
const BotonesMain = () =>{
    const router = useRouter();
    return(
    <section className="mainBtns mt-10 mb-10 justify-center flex flex-row flex-wrap gap-20">
        <div onClick={() => router.replace("/productos/all")} className=" cursor-pointer flex flex-row gap-10 p-10  items-center border bg-gray-800 rounded-50 border-transparent hover:border-red-500 transition-all duration-500 ease-in-out px-4 py-2">
            BUILD & PRICE 
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#ababab" d="m21.71 20.29l-1.42 1.42a1 1 0 0 1-1.41 0L7 9.85A3.8 3.8 0 0 1 6 10a4 4 0 0 1-3.78-5.3l2.54 2.54l.53-.53l1.42-1.42l.53-.53L4.7 2.22A4 4 0 0 1 10 6a3.8 3.8 0 0 1-.15 1l11.86 11.88a1 1 0 0 1 0 1.41M2.29 18.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0l5.47-5.46l-2.83-2.83M20 2l-4 2v2l-2.17 2.17l2 2L18 8h2l2-4Z"/></svg>
            </div>
            <div onClick={() => router.replace("/productos/all")} className=" cursor-pointer  flex flex-row gap-10 items-center border bg-gray-800 rounded-50 border-transparent hover:border-red-500 transition-all duration-500 ease-in-out px-4 py-4">
            VIEW INVENTORY 
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#ababab" d="M16 6h-5.5v4H1v5h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-3c0-1.11-.89-2-2-2h-2zm-4 1.5h3.5l1.96 2.5H12zm-6 6A1.5 1.5 0 0 1 7.5 15A1.5 1.5 0 0 1 6 16.5A1.5 1.5 0 0 1 4.5 15A1.5 1.5 0 0 1 6 13.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"/></svg>
            </div>
            <div className=" cursor-pointer flex flex-row gap-10 items-center border bg-gray-800 rounded-50 border-transparent hover:border-red-500 transition-all duration-500 ease-in-out px-4 py-2">
            CURRENT OFFERS 
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="#ababab" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m6 12l36 4v24L6 36zm32 3.555V8L6 12"/></svg>
            </div>
            <div onClick={() => router.replace("/accesorios")} className=" cursor-pointer  flex flex-row gap-10 items-center border bg-gray-800 rounded-50 border-transparent hover:border-red-500 transition-all duration-500 ease-in-out px-4 py-2">
            ACCESIORIES 
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="#ababab" strokeLinecap="round" strokeLinejoin="round" d="M34.339 23.113c0 8.071-6.543 14.614-14.615 14.614S5.11 31.184 5.11 23.113h0c0-8.071 6.543-14.615 14.614-14.615S34.34 15.042 34.34 23.113m-.664 10.507l.536-.93a2.057 2.057 0 0 1 2.816-.754l4.83 2.789a2.057 2.057 0 0 1 .754 2.815l-.536.93a2.057 2.057 0 0 1-2.816.754l-4.83-2.789a2.057 2.057 0 0 1-.754-2.815m-1.904-2.047l2.27 1.311" strokeWidth="1"/><path fill="none" stroke="#ababab" strokeLinecap="round" strokeLinejoin="round" d="M19.68 19.86a3.293 3.293 0 0 1 0 6.589h0a3.293 3.293 0 0 1-3.293-3.294v0a3.293 3.293 0 0 1 3.292-3.294" strokeWidth="1"/><path fill="none" stroke="#ababab" strokeLinecap="round" strokeLinejoin="round" d="m17.254 12.521l-.52 2.673a8.2 8.2 0 0 0-2.375 1.367l-2.566-.885l-2.473 4.282l2.055 1.788a7.7 7.7 0 0 0 0 2.737L9.32 26.27l2.473 4.28l2.564-.884a8.1 8.1 0 0 0 2.378 1.366l.519 2.672h4.941l.51-2.645a9.3 9.3 0 0 0 2.385-1.395l2.566.885l2.471-4.28l-2.053-1.789a7.6 7.6 0 0 0 0-2.732l2.055-1.792l-2.473-4.28l-2.564.884a8.1 8.1 0 0 0-2.378-1.365l-.519-2.673z" strokeWidth="1"/></svg>
            </div>
    </section>
    )
}
export default BotonesMain
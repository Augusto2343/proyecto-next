import Image from "next/image";
import Banner from "../components/Banner";
import NosotrosCont from "../components/nosotrosCont";
const Nosotros = () =>{
    return(
        <>
        <section className=" relative w-screen h-full  mb-10">
            <Banner  transparentacion={"20%"} ladoEfecto={"left"} img={"https://firebasestorage.googleapis.com/v0/b/proyectogmc-70d84.firebasestorage.app/o/bannerInicio.avif?alt=media&token=868380ad-8671-4376-9d8a-0850ace26e8d"} >
            <h2 className="text-white text-2xl font-bold">Nosotros</h2>
            </Banner>
        </section>
        <NosotrosCont/>
        </>
    )
}
export default Nosotros;
import Image from "next/image";
import Banner from "../components/Banner";
import NosotrosCont from "../components/nosotrosCont";
const Nosotros = () =>{
    return(
        <>
        <section className=" relative w-screen h-full  mb-10">
            <Banner  transparentacion={"20%"} ladoEfecto={"left"} titulo={"Nosotros"} img={"https://gld-creative.s3.us-west-2.amazonaws.com/2024-gmc-trucks-parked-in-front-of-mountains-banner-672bdae65778-1920x600.png"} >
            
            </Banner>
        </section>
        <NosotrosCont/>
        </>
    )
}
export default Nosotros;
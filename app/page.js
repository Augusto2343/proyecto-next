import Header from "./components/Header"
import Banner from "./components/Banner"
import Carousel from "./components/Carousel";
import arrayNovedades from "./data/novedades"
import BotonesMain from "./components/BotonesMain";
import ObtenerContenido from "./components/ObtenerContenido";
import InfoCards from "./components/infoCards";
export default function Home() {

  return (
    <>
    <Header/>
    <Carousel imgArray={ arrayNovedades}></Carousel>
    <BotonesMain/>
    <ObtenerContenido/>
    <Banner titulo={"Recursos para el cliente"}  transparentacion={"20%"} ladoEfecto={"left"} img="https://firebasestorage.googleapis.com/v0/b/proyectogmc-70d84.firebasestorage.app/o/interior%20sierra.avif?alt=media&token=b1e9395f-0756-4fb8-810f-eb1d5fbf8817 ">
    
    <div className="cartas flex flex-row flex-wrap gap-15">
    <InfoCards >
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><circle cx={12} cy={12} r={10}></circle><circle cx={12} cy={12} r={2}></circle><circle cx={12} cy={12} r={6}></circle><path d="M12 14v4m-1.9-5.38l-3.8 1.23m4.52-3.47L8.47 7.15m5.43 5.47l3.8 1.23m-4.52-3.47l2.35-3.23"></path></g></svg>
    <h3 className="text-black text-2xl">Equipate para explorar el siguiente evento.</h3>
    <p className="text-black text-md">Mejora tu GMC para participar de aventuras épicas de verano con un 25% de descuento en accesorios.</p>
    </InfoCards>
    <InfoCards >
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#000" d="M7.616 22q-.672 0-1.144-.472T6 20.385V3.615q0-.69.463-1.152T7.616 2h8.846q.67 0 1.143.472q.472.472.472 1.144V6.83q.373.04.648.31q.275.269.275.648v1.769q0 .379-.275.648t-.648.31v9.869q0 .67-.472 1.143q-.472.472-1.143.472zm0-1h8.846q.269 0 .442-.173t.173-.442V3.615q0-.269-.173-.442T16.462 3H7.616q-.27 0-.443.173T7 3.616v16.769q0 .269.173.442t.443.173M7 21V3zm5.039-14.692q.328 0 .548-.22t.22-.55t-.22-.549t-.549-.22t-.549.22t-.22.55t.22.548t.55.22"></path></svg>
    <h3 className="text-black text-2xl">Aplicación de celular MYGMC </h3>
    <p className="text-black text-md">Experiencia conveniente y control dentro y fuera de tu GMC disponible con la app MYGMC. </p>
    </InfoCards>
    
    </div>
    
    
    </Banner>
    </>
  );
}

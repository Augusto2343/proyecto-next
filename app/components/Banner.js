"use client"
import Image from "next/image";
const Banner = ({img,ladoEfecto,transparentacion,children,titulo}) =>{
    const classes= ladoEfecto == "right" ? `
    mask-alpha mask-r-from-black mask-r-from-${transparentacion} mask-r-to-transparent bg-[url(${img})]`:
    `mask-alpha mask-l-from-black mask-l-from-${transparentacion} mask-l-to-transparent bg-[url(${img})]`
    return(
        <div className=" relative banner h-auto">
        <div className={classes}>
            <img src={img} className="imgBanner " alt="Banner" /> 
            </div>
        <div className=" bannerItems p-20 w-full items-center justify-between flex flex-row absolute">
        <h2 className="text-2xl text-gray-200">{titulo}</h2>
            {children}
        </div>
        </div>
    )
}

export default Banner;
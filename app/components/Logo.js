import Image from "next/image";
import icon from "../../public/images/GMC-icon.svg"
const Logo = ({clase}) =>{
    
    return(
        <div className="headerIcon">
            <Image src={icon} className={clase} alt="GMC Logo" width={200} height={100} />
        </div>
    )
}
export default Logo;

import ProductDetail from "@/app/components/ProductDetail";

export async function generateMetadata({params,searchParams},parent){
    const {slug} = await params;
        const response = await fetch("http://localhost:3000/api/producto/" + slug, {
            cache:"no-store"
        })
        const item = await response.json();
    return{
        title:`${item.titulo} | GMC`
    }
}
const Productos = async({params}) =>{
    const {slug} = await params;
        const response = await fetch("http://localhost:3000/api/producto/" + slug, {
            cache:"no-store"
        })
        const item = await response.json()
        return(<>
            <ProductDetail item = {item}></ProductDetail>
            </>
        )
}
export default Productos
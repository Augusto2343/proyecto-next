import Header from "@/app/components/Header"
import "../../globals.css"
export const metadata = {
  title: "Productos | GMC",
  description: "Acerca de Productos. En el sitio oficial Chevrolet podés encontrar todos los modelos de Autos.",
  keywords: ["GMC", "GMC argentina", "gmc autos", "generalmotors"]
};

export default function ProductosLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
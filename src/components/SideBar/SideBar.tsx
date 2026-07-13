import { ShoppingBag, Package, BarChart3 } from "lucide-react";
import "./sideBar.css";

export default function SideBar() {
    return(
        <> 
            
            <h2 className="logo">
                <ShoppingBag size={28} />
                <span>Product Hub</span>
            </h2> 
            <nav className="nav">
                <a href="#">
                    <Package />
                    Produtos
                </a>
                <a href="#">
                    <BarChart3 />
                    Relatório
                </a>
            </nav>
        </>
    )
}
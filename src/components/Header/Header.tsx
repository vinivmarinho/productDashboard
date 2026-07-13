import { Bell, Moon, Plus } from "lucide-react";
import "./header.css"
export default function Header() {
    return(
        <header className="header">
            <div className="title">
                <h1 className="header-title">Produtos</h1>
                <p className="header-description">Gerencie seus produtos de forma simples e eficiente</p>
            </div>
    
            <div className="icons">
                <div className="top-icons">
                    <Bell 
                        size={24}
                        strokeWidth={1.8}
                    />
                    <Moon 
                        size={24}
                        strokeWidth={1.8}
                    />
                </div>
                <button className="new-product-button">
                    <Plus size={20} /> 
                    Novo Produto
                </button>
            </div>

        </header>
    )
}
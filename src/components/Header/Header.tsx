import { Bell, Moon, Plus } from "lucide-react";
import "./header.css";
import { AddProductModal } from "../Modals/AddProductModal";
import { useState } from "react";

export default function Header() {
   
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function handleCloseModal() {
        setModalIsOpen(false)
    };
    function handleOpenModal() {
        setModalIsOpen(true)
    };

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
                <button className="new-product-button" onClick={handleOpenModal}>
                    <Plus size={20} /> 
                    Novo Produto
                </button>
            </div>
        {modalIsOpen && (
            <AddProductModal onClose={handleCloseModal}/>
        )}

        </header>   
    )
}
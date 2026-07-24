import { Pencil, Trash2 } from "lucide-react";
import "./table.css";
import { readAllProducts, deleteProduct } from "../../data/products";
import { useState, useEffect } from "react";
import type { Product } from "../../data/products";

export default function Table() {
    // Armazena um array de `Product` (o type alias) e começa vazio
    // Depois, ao chamar `setProducts(readAllProducts)`, ele será atualizado com os produtos do localStorage
    const [products, setProducts] = useState<Product[]>([]); 

    useEffect(() => {
        setProducts(readAllProducts());
    }, [])
    
    function handleDelete(id: number) {
        deleteProduct(id)
    };

    return(
        <table className="products-table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>QTD. Estoque</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tbody>
                
                {/* Mostrando os produtos salvos no localStorage */}
                {products.map((product) => (
                    <tr key={product.id}>    
                        <td>{product.name}</td> 
                        <td>{product.category}</td>
                        <td>R${product.price.toFixed(2)}</td>
                        <td>{product.stock}</td>
                        <td>
                            <span className={`status ${product.status}`}>
                                {product.status === "active" ? "Ativo" : "Inativo"}
                            </span>
                        </td>

                        <td className="actions">
                            <button>
                                <Pencil size={18}/>
                            </button>

                            <button onClick={() => handleDelete(product.id)}>
                                <Trash2 size={18} />
                            </button>
                        </td> 
                    </tr>
                ))}
               
            </tbody>
        </table>
    )
}
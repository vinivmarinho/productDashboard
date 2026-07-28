import { Pencil, Trash2 } from "lucide-react";
import "./table.css";
import { readAllProducts, deleteProduct } from "../../data/products";
import { useEffect } from "react";
import type {Dispatch, SetStateAction } from "react";
import type { Product } from "../../data/products";

/* Tipando as props vindas de app.jsx */
type TableProps = {
    products: Product[];
    setProducts: Dispatch<SetStateAction<Product[]>>; 
    category: string;
    order: string;
};

/* Opções para organizar os produtos na tabela */
// Record é um tipo utilitário que cria um objeto cujas chaves são do tipo string e os valores correspondem ao segundo tipo informado(a função)
const sortOptions: Record<string, (a: Product, b: Product) => number> = {
    "name-asc": (a, b) => a.name.localeCompare(b.name),
    "name-desc": (a, b) => b.name.localeCompare(a.name),
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price
};

export default function Table({ products, setProducts, category, order } : TableProps ){
    // Cria um novo array com base em `products` o faz um sorted baseado no valor do estado `order`
    const sortedProducts = [...products].sort(sortOptions[order]);

    /* Lista os produtos quando o componente é renderizado*/
  useEffect(() => {
    setProducts(readAllProducts());
  }, []);
    
    function handleDelete(id: number) {
        deleteProduct(id);
        setProducts(readAllProducts());
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
                {sortedProducts
                // Filtra o array products com 2 possibilidades: 
                // Se o estado "category" for igual a "all", todos os produtos retornam true e permanecem no array
                // Caso contrário, mantém apenas os produtos que possuem "category" igual ao valor do estado "category"
                .filter((product) => category === "all" || product.category === category)
                .map((product) => (
                    
                    <tr key={product.id}>    
                        <td>{product.name}</td>
                        <td>{product.category === "electronics" ? "Eletrônicos" : product.category === "accessories" ? "Acessórios" : "Móveis"}</td> {/* Converte os valores internos da categoria para os nomes exibidos na interface */}
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
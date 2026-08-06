import "./productForm.css";
import { X } from "lucide-react";
import { useState } from "react";
import { createProduct, readAllProducts, updateProduct } from "../../data/products.ts";
import { toast } from "react-toastify";
import type { Dispatch, SetStateAction } from "react";
import type { Product } from "../../data/products.ts";

/*Define as propriedades que o componente AddProductModal recebe */
type ProductFormProps = {
    onClose: () => void;
    setProducts: Dispatch<SetStateAction<Product[]>>;
    product?: Product;
};

export function ProductForm({onClose, setProducts, product}: ProductFormProps) {
    /* Se "product existir, preenche os estados com as propriedades. Caso contrário, estados começam vazios*/
    const [name, setName] = useState(product?.name ?? "");
    const [price, setPrice] = useState(product?.price ?? "");
    const [stock, setStock] = useState(product?.stock ?? "");
    const [status, setStatus] = useState(product?.status ?? "");
    const [category, setCategory] = useState(product?.category ?? "");

    /* Função que chama a criação ou edição do produto */

    function handleSubmit(event: React.SubmitEvent) {
        event.preventDefault();

        if (product) {
            try {
                updateProduct(product.id, {
                    name, price: Number(price), stock: Number(stock), status, category
                });
                toast.success("Produto atualizado com sucesso")
            } catch(error) {
                toast.error("Erro ao atualizar o produto")
            }
        } else {
            try {
                createProduct(name, category, Number(price), Number(stock), status);
                toast.success("Produto criado com sucesso");
            } catch(error) {
                toast.error("Erro ao cadastrar produto")
            }
        }
        setProducts(readAllProducts()); 
        onClose();
    }
    return(
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="modal-close">
                    <X size={20}/>
                </button>
                <h2>{product ? "Editar Produto" : "Adicionar Produto"}</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="product-name">Nome:</label>
                        <input 
                            id="product-name" 
                            placeholder="Nome do produto"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                            >
                        </input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Preço</label>
                            <input 
                            type="number" 
                            placeholder="Preço do produto"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                            required
                            >
                            </input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="stock">Quantidade em estoque</label>
                            <input 
                            type="number" 
                            placeholder="Estoque"
                            value={stock}
                            onChange={(event) => setStock(event.target.value)}
                            required
                            >
                                
                            </input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select 
                        id="status"
                        value={status}
                        onChange={(event) => setStatus(event.target.value)}
                        required
                        >
                            <option value="" disabled selected>Selecione o Status</option>
                            <option value="active">Ativo</option>
                            <option value="inactive">Inativo</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Categoria</label>
                        <select 
                        id="category"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        required
                        >
                            <option value="" disabled selected>Categoria do produto</option>
                            <option value="electronics">Eletrônicos</option>
                            <option value="accesories">Acessórios</option>
                            <option value="furniture">Móveis</option>
                        </select>
                    </div>

                    <button type="submit" className="btn-submit">Cadastrar Produto</button>
                </form>
                
            </div>
        </div>
    )
}
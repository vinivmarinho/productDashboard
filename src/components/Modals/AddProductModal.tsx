import "./addProductModal.css";
import { X } from "lucide-react";
import { useState } from "react";
import { createProduct } from "../../data/products";
import { toast } from "react-toastify";

/*Define as propriedades que o componente AddProductModal recebe */
type Props = {
    onClose: () => void;
};

/* Pegar os valores de cada input. Como => Usando value e estados */
export function AddProductModal({onClose}: Props) {
    /* Estados*/
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [status, setStatus] = useState("");
    const [category, setCategory] = useState("");

    /* Função que chama a criação do produto */
    function  handleSubmit(event: React.SubmitEvent) {
        event.preventDefault();
        try {
            createProduct(name, category, Number(price), Number(stock), status);
            toast.success("Produto criado com sucesso");
            
        } catch(error) {
            toast.error("Erro ao criar o produto");
        }
        onClose();
    };

    return(
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="modal-close">
                    <X size={20}/>
                </button>
                <h2>Adicionar Produto</h2>

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
                            <option value="Electrônicos">Eletrônicos</option>
                            <option value="Acessórios">Acessórios</option>
                            <option value="Móveis">Móveis</option>
                        </select>
                    </div>

                    <button type="submit" className="btn-submit">Cadastrar Produto</button>
                </form>
                
            </div>
        </div>
    )
}
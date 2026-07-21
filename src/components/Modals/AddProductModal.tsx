import "./addProductModal.css";
import { X } from "lucide-react";

/*Define as propriedades que o componente AddProductModal recebe */
type Props = {
    onClose: () => void;
};

export function AddProductModal({onClose}: Props) {
    return(
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="modal-close">
                    <X size={20}/>
                </button>
                <h2>Adicionar Produto</h2>

                <form>
                    <div className="form-group">
                        <label htmlFor="product-name">Nome:</label>
                        <input id="product-name" placeholder="Nome do produto"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Preço</label>
                            <input type="number" placeholder="Preço do produto"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="stock">Quantidade em estoque</label>
                            <input type="number" placeholder="Estoque"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select id="status">
                            <option disabled selected>Selecione o Status</option>
                            <option>Ativo</option>
                            <option>Inativo</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Categoria</label>
                        <select id="category">
                            <option disabled selected>Categoria do produto</option>
                            <option>Eletrônicos</option>
                            <option>Acessórios</option>
                            <option>Móveis</option>
                        </select>
                    </div>
                </form>
                
            </div>
        </div>
    )
}
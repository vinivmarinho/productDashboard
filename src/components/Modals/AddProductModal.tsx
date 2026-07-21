import "./addProductModal.css";
/*Define as propriedades que o componente AddProductModal recebe */
type Props = {
    onClose: () => void;
};

export function AddProductModal({onClose}: Props) {
    return(
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose}>
                    Fechar
                </button>
                <h2>Adicionar Produto</h2>

                <form>
                    /* Campos do formulário */ 
                </form>
                
            </div>
        </div>
    )
}
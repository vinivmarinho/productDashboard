import { Pencil, Trash2 } from "lucide-react";
import "./table.css";
export default function Table() {
    return(
        <table className="products-table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Estoque</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Noteboook Dell </td>
                    <td>Eletrônicos</td>
                    <td>R$ 4.500,00</td>
                    <td>15</td>
                    <td>
                        <span className="status active">
                            Ativo
                        </span>
                    </td>

                    <td className="actions">
                        <button>
                            <Pencil size={18}/>
                        </button>

                        <button>
                            <Trash2 size={18} />
                        </button>
                    </td>

                </tr>   
            </tbody>
        </table>
    )
}
import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";
import "./searchBar.css";
export default function SearchBar() {
    return(
        <div className="toolbar">
            <div className="search-box">
                <Search size={20} />
                <input
                    type="search"
                    placeholder="Buscar produto..."
                >
                </input>
            </div>
        
        <div className="select-box">
            <select>
                <option>Todas as categorias</option>
                <option>Eletrônicos</option>
                <option>Acessórios</option>
                <option>Móveis</option>
            </select>

            <ChevronDown size={18} />
        </div>

        <div className="select-box">
            <select>
                <option>Ordenar por: Nome A-Z</option>
                <option>Nome Z-A</option>
                <option>Preço ↑</option>
                <option>Preço ↓</option>
            </select>

            <ChevronDown size={18} />
        </div>

        <button className="filter-btn">
            <SlidersHorizontal size={18}/>
            Filtros
        </button>
        </div> /* Última div*/
    )
}
import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";
import "./searchBar.css";
import type { Dispatch, SetStateAction} from "react";
import { useState } from "react"; 
import type { Product } from "../../data/products.ts";

type SearchBarProps = {
    category: string;
    setCategory: Dispatch<SetStateAction<string>>;
    order: string;
    setOrder: Dispatch<SetStateAction<string>>;
    products: Product[]
};

export default function SearchBar({category, setCategory, order, setOrder, products}: SearchBarProps) {
    /* Estado do campo de pesquisa de produto */
    const [search, setSearch] = useState("");
    /* Produtos que contenham o texto passado ao estado search */
    const filteredProducts = products.filter(product => product.name.toLowerCase().startsWith(search.toLowerCase()));
    
    return(
        <div className="toolbar">
            <div className="search-box">
                <Search size={20} />
                <input
                    type="search"
                    placeholder="Buscar produto..."
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                >
                </input>
                {/* Mostrar lista de filteredProducts */}
                <div className="suggestions">
                    {search && (
                        filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <button 
                                key={product.id}
                                className="suggestion-item"
                                >
                                    {product.name.toLowerCase()}
                                </button>
                            ))
                        ) : (
                            <p className="no-results">Nenhum produto encontrado</p>
                        )
                    )} 
                </div>
            </div>
        
        <div className="select-box">
            <select
            value={category}
            onChange={event => setCategory(event.target.value)}
            >
                <option value="all">Todas as categorias</option>
                <option value="electronics">Eletrônicos</option>
                <option value="accessories">Acessórios</option>
                <option value="furniture">Móveis</option>
            </select>

            <ChevronDown size={18} />
        </div>

        <div className="select-box">
            <select
            value={order}
            onChange={event => setOrder(event.target.value)}
            >
                <option value="name-asc">Ordenar por: Nome A-Z</option>
                <option value="name-desc">Nome Z-A</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior preço</option>
            </select>

            <ChevronDown size={18} />
        </div>

        <button className="filter-btn">
            <SlidersHorizontal size={18}/>
            Filtros
        </button>
        </div> 
    )
}
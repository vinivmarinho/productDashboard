import { Search } from "lucide-react";
import "./searchBar.css";
export default function SearchBar() {
    return(
        <div className="filter-box">
            <div className="search-box">
                <Search size={20} />
                <input
                    type="search"
                    placeholder="Buscar produto..."
                >
                </input>
            </div>
        
        
        </div>
    )
}
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import SearchBar from './components/SearchBar/SearchBar';
import Table from "./components/Table/Table";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type {Product } from "./data/products.ts";
import { useState } from "react";

function App() {
  // Armazena um array de `Product` (o Type Alias ) e começa vazio
  // setProducts é passado como props para "Table"
  const [products, setProducts] = useState<Product[]>([]);
  // Armazena categoria de produtos. SearchBar.tsx é responsável pela alteração de valores através do select
  const [category, setCategory] = useState("all");
  // Armazena ordem dos produtos. SearchBar.tsx é responsável pela alteração de valores através do select
  const [order, setOrder] = useState("name-asc");
  return (
    <>
      <div className="main">
          <div className="side-bar">
            <SideBar />
          </div>
        
        <div className="content">
          <Header setProducts={setProducts} />
          <SearchBar category={category} setCategory={setCategory} order={order} setOrder={setOrder} products={products} />
          {/* TODO: Passar prop "products" e "setProducts"*/}
          <Table products={products} setProducts={setProducts} category={category} order={order}  />
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App

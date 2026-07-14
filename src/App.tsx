import { Search } from 'lucide-react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import SearchBar from './components/SearchBar/SearchBar';
import Table from "./components/Table/Table";

function App() {

  return (
    <div className="main">
        <div className="side-bar">
          <SideBar />
        </div>
      
      <div className="content">
        <Header />
        <SearchBar />
        <Table />
      </div>
    </div>
  )
}

export default App

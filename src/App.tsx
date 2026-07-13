import { Search } from 'lucide-react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  return (
    <div className="main">
        <div className="side-bar">
          <SideBar />
        </div>
      
      <div className="content">
        <Header />
        <SearchBar />
      </div>
    </div>
  )
}

export default App

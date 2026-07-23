import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import SearchBar from './components/SearchBar/SearchBar';
import Table from "./components/Table/Table";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
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
      <ToastContainer />
    </>
  )
}

export default App

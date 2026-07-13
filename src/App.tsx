import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';


function App() {

  return (
    <div className="main">
        <div className="side-bar">
          <SideBar />
        </div>
      
      <div className="content">
        <Header />
      </div>
    </div>
  )
}

export default App

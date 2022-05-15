import './App.css';
import About from './Components/About';
import Crousel from './Components/Crousel';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Topbar from './Components/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Navbar/>
      <Crousel/>
   <About/>
   <Footer/>
    </div>
  );
}

export default App;

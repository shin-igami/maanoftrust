import './App.css';
import About from './Components/About';
import Card4 from './Components/Card4';
import Crousel from './Components/Crousel';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Our_story from './Components/Our_story';
import Topbar from './Components/Topbar';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className="App">

      <Topbar/>
      <Navbar/>
      {/* <Home/> */}
      <Our_story/>
      <Card4/>
      




   <Footer/>
    </div>
  );
}

export default App;

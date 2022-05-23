import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Topbar from './Components/Topbar';
import Home from './Pages/Home/Home';
import {Route,Routes} from 'react-router-dom'
import About from './Pages/About/About';
import Team from './Pages/About/Team';
import Mentor from './Pages/About/Mentor';
function App() {
  return (
    <div className="App">

      <Topbar/>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about-maanof" element={<About/> } />
        <Route path="team" element={<Team/>} />
        <Route path="mentors" element={<Mentor/>} />
      </Routes>
   <Footer/>
    </div>
  );
}

export default App;

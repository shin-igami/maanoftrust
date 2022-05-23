import './App.css';
<<<<<<< HEAD
import About from './Components/About';
import Card4 from './Components/Card4';
import Crousel from './Components/Crousel';
=======
>>>>>>> master
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Our_story from './Components/Our_story';
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
<<<<<<< HEAD
      {/* <Home/> */}
      <Our_story/>
      <Card4/>
      




=======
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about-maanof" element={<About/> } />
        <Route path="team" element={<Team/>} />
        <Route path="mentors" element={<Mentor/>} />
      </Routes>
>>>>>>> master
   <Footer/>
    </div>
  );
}

export default App;

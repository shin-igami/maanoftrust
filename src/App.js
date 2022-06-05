import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Topbar from './Components/Topbar';
import Home from './Pages/Home/Home';
import {Route,Routes} from 'react-router-dom'
import About from './Pages/About/About';
import Team from './Pages/About/Team';
import Mentor from './Pages/About/Mentor';
import Diversity from './Pages/Ourimpact/Diversity/Diversity';
import Headingimage from './Components/Cards/Headingimage/Headingimage';
import Contact from './Pages/Contact/Contact';
import Jobs from './Pages/Contact/Jobs';
import BecomeMentor from './Pages/Contact/BecomeMentor';
import BeacomePartner from './Pages/Contact/BeacomePartner';
import CreateImpact from './Pages/Ourimpact/Create Impact/CreateImpact';
import FocusSectors from './Pages/Home/FocusSectors/FocusSectors';
import CurrentProgram from './Pages/Home/CurrentProgram/CurrentProgram';


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
        <Route path="/impact/Diversity" element={ <Diversity/>} />
        <Route path="/impact/creating-impact" element={ <CreateImpact/>} />
        <Route path="/programs/focus-sectors" element={ <FocusSectors/>} />
        <Route path="/programs/current-programs" element={ <CurrentProgram/>} />
        <Route path="/contact/contact-us" element={<Contact/>} />
        <Route path="/contact/jobs" element={ <Jobs/>} />
        <Route path="/contact/become-a-mentor" element={ <BecomeMentor/>} />
        <Route path="/contact/partnerwith-us" element={ <BeacomePartner/>} />
      </Routes>

   <Footer/>
    </div>
  );
}

export default App;

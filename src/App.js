import './App.css';
import { NavBar } from './components/NavBar';
import { Banner} from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Experience } from './components/Experience';
import { HProjects } from './components/Projects';
import Projects from './pages/projects'
import { Footer } from './components/footer';
import { Route, Routes,} from "react-router-dom";
import Academics from "./pages/academics"
import  Home  from './pages/homePage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" component={Projects} />
        <Route path="academics" element={<Academics />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>

    
      
  );
}

export default App;

import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './pages/projects'
import { Footer } from './components/footer';
import { Route, Routes,} from "react-router-dom";
import Academics from "./pages/academics"
import  Home  from './pages/homePage';
import Resume from "./pages/resume.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="projects" element={<Projects />} />
        <Route path="academics" element={<Academics />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>

    
      
  );
}

export default App;

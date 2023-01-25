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

function App() {
  return (
      <div className="App">
        <NavBar />
        <Banner />
        <Experience />
        <HProjects />
        <Footer />
      </div>
      
  );
}

export default App;

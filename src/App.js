import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner} from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Experience } from './components/Experience';
import { HProjects } from './components/Projects';
import Projects from './pages/projects'
import { Footer } from './components/footer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Academics from "./pages/academics"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Banner />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="projects" element={<Projects />} />
          <Route path="academics" element={<Academics />} />
          <Route path='*' element={<Academics />} />
        </Routes>
        <Footer />
      </div>
    </Router>
      
  );
}

export default App;

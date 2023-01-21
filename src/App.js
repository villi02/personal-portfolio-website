import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner} from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Experience } from './components/Experience';
import { HProjects } from './components/Projects';
import Projects from './components/projectPage/projects'
import { Footer } from './components/footer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <Banner />
      <Experience />
      <HProjects />
      <Footer />
      </div>
      <Routes>
          <Route path="/project" element={<Projects />} />
        </Routes>
    </Router>
  );
}

export default App;

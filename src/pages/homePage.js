import React from 'react';
import { NavBar } from '../components/NavBar';
import { Banner} from '../components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Experience } from '../components/Experience';
import { HProjects } from '../components/Projects';
import { Footer } from '../components/footer';

function Home() {
    return (
        <div>
            <Banner />
            <Experience />
            <HProjects />
        </div>
        );
    }
export default Home;
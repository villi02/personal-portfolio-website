import React from 'react';
import { Banner} from '../components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Experience } from '../components/Experience';
import { HProjects } from '../components/Projects';

function Home() {
    return (
        <div id='body'>
            <Banner /> 
            <Experience />
            <HProjects />
        </div>
        );
    }
export default Home;
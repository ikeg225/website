import Project from './SingleProject';
import ProjectData from '../data/projects.json';
import '../css/projects.css';
import { useState, useEffect } from "react";

function Projects() {

    function toProject(jsonList) {
        let num = 0;
        return jsonList.map((data) => {
            num = num + 1;
            return <Project 
                name={data.name}
                category={data.category}
                key={num}
                image={data.image}
                description={data.description}
                technology={data.technology}
                moreinfo={data.moreinfo}
            />
        })
    }

    const eachProject = toProject(Object.values(ProjectData.projects));

    const [projects, setFilterProject] = useState(null);
    const [button, setButton] = useState("all");

    useEffect(() => {
        setFilterProject(eachProject);
    }, []);

    function filterProject(projType) {
        const projects = Object.values(ProjectData.projects).filter(project => project.category === projType);
        const projectSet = toProject(projects);
        return projectSet;
    }

    function handleProject(e) {
        const typeProject = e.target.value;
        setButton(typeProject);
        typeProject !== "all" ? setFilterProject(filterProject(typeProject)) : setFilterProject(eachProject);
    }

    // A function that randomizes the order of projects.
    //  function shuffleArray(array) {
    //      for (let i = array.length - 1; i > 0; i--) {
    //          const j = Math.floor(Math.random() * (i + 1));
    //          [array[i], array[j]] = [array[j], array[i]];
    //      }
    //  }
    //  shuffleArray(projects);    

    return (
        <div className="latest">
            <h1 className="pageTitle" >Latest Projects</h1>
            <div className="filter">
                <button className={button === "all" ? 'buttSelected' : ''} value="all" onClick={handleProject} >All</button>
                <button className={button === "web" ? 'buttSelected' : ''} value="web" onClick={handleProject} >Web Dev</button>
                <button className={button === "software" ? 'buttSelected' : ''} value="software" onClick={handleProject} >Software</button>
                <button className={button === "data" ? 'buttSelected' : ''} value="data" onClick={handleProject} >Data Science</button>
            </div>
            {projects}
        </div>
    )
}

export default Projects
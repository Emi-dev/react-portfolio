import React from "react";
import Project from "../components/Project";
import Projects from "../assets/data/projects.json";
import Header from "../components/Header";

function Portfolio() {
    return (
        <div>
            <Header
                page="Portfolio"
            />
            <div className="row m-auto">
                {Projects.map(project => (
                    <Project
                        key={project.id}
                        name={project.name}
                        img={project.img}
                        url={project.url}
                        github={project.github}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
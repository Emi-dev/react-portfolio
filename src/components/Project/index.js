import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div className="card border-secondary col-sm-6 col-m-4 mx-auto mb-3" style={{maxWidth:"18rem"}}>
            <div className="card-header">{props.name}</div>
            <div className="card-body">
                <img src={props.img} alt="application"/>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer">
                <a href={props.url} target="_blank" rel="noopener noreferrer" className="mx-2">
                    <i className="fa fa-link fa-2x"></i>
                </a>
                <a href={props.github} target="_blank" rel="noopener noreferrer" className="mx-2">
                    <i className="fab fa-github fa-2x"></i>
                </a>
            </div>
        </div>
    );
}

export default Project;
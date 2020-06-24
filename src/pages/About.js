import React from "react";
import Header from "../components/Header";
import MyInfo from "../components/MyInfor";
import "./style.css";

function About() {
    return (
        <div className="container mt-4 rounded">
        <div>
            <Header
                page="About Me"
            />
        </div>

        <div class="row mt-4">  
            <div class="col-xs-12 col-sm-5 col-md-4 col-lg-3">
                <img class="img-fluid img-thumbnail rounded-circle" src="/images/Emi2019.jpg" alt="Emi Clar"/>
                <MyInfo />
            </div>

            <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 mt-2 text-left">
                <p>
                    I am a Front-End / Full Stack Web Developer with a background in technical support and software programming. With the Certificate from the University of Central Florida Coding Boot Camp in addition to a Bachelor of Science in Computer Science from Northeastern University, I am proficient in JavaScript, ReactJS, Express, Node Js, HTML,CSS, MySQL, MongoDB. I also have experience developing a software in C#, and coding in Java and C++.
                </p>
                <p>
                    I moved to the US by myself without speaking English when I was 19, and earned a B.S. in Computer Science. At the time I was also learning English and working as a QA engineer (co-op student) in the greater Boston area. This experience taught me that any challenge can be overcome with focus and dedication. During this time I learned valuable skills most notably the importance of building and maintaining positive work relationships and how to be a productive member of a team. 
                </p>
                <p>
                    I am eager to combine my previous IT experience and web development skills to create meaningful web applications. I look forward to the opportunity to  contribute to a team as I continue to master my technical skills. 
                </p>
            </div>
        </div> 
        </div>        
    );
}

export default About;
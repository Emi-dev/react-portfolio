import React from "react";
import Header from "../components/Header";
import MyInfo from "../components/MyInfor";

function About() {
    return (
        <div>
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
                    Hello! My name is Emi Clar. I was born and raised in Japan.<br/> 
                    I have lived in Bethlehem, PA, Boston, MA, and currently live in Winter Springs, FL.<br/>
                    I first moved to the United States to attend college right after highschool without speaking English.<br/>
                    It took me a year to start being able to have conversations in English, and once I started speaking English, I started working as a math tutor for other college students.<br/>
                    One of the math professors recommended me to study Computer Science during my second year in college, and I am glad I listened to him.<br/>
                    
                    After I earned a bachelor's degree in Computer Science from Northeastern University in Boston, MA, I moved back to Japan and worked as a software programmer at the accounting software company.
                </p>
                <p>
                    I am currently enrolled in the UCF Full-Stack Web Development Bootcamp, which is a 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3,
                    Javascript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS.<br/>
                    And I am actively lookingn for a full-time Web Developer/Software Engineer position.<br/>
                    Please feel free to contact me, visit my GitHub and LinkedIn pages, and find my resume from the links below.<br/>
                </p>
                <p>
                    In my free time, I enjoy going out and playing board games with my 7-year-old daughter, playing the piano, cooking, planning travels, and watching Japanese TV shows.<br/>
                    I have two Chihuahuas that are probably the most friendly and mellow Chihuahuas you will ever meet.
                </p>
            </div>
        </div> 
        </div>        
    );
}

export default About;
import React from "react";
import { Link } from "react-router-dom";

function MyInfo() {
    return (
        <div>
            <div class="snsLinks text-center my-0">
                <a href="https://www.linkedin.com/in/emiclar/" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin-in fa-2x m-2"></i>
                </a>
                <a href="https://github.com/Emi-dev" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-2x m-2"></i>
                </a>
                <a href="/images/Emi Clar_Resume_May2020.pdf" target="_block">
                    <i class="fas fa-file fa-2x mt-2"></i>
                </a>
                <a href="mailto:kotaki@gmail.com" target="_top">
                    <i class="fas fa-envelope-square fa-2x m-2"></i>
                </a>
                <a href="tel:201-588-1206">
                    <i class="fas fa-phone-square fa-2x m-2"></i>
                </a>
            </div>

            <Link
                to="/portfolio"
                className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
                Portfolio
            </Link>
        </div>
    );
}

export default MyInfo;
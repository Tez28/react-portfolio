import React from "react";

function Resume() {
    return (
        <div className="columns">
            <div className="column">
                <p className="content is-medium" >Resume</p>
                <a className="button is-primary" href="../../assets/resume/Courtez M. Cannady SW.pdf" >
                    <span className="icon" ><i className="fa-solid fa-file-pdf" ></i></span>
                    <span>Checkout My Resume</span>
                </a>
                <div className="column" >
                    <p className="content is-medium" >Skills</p>
                    <hr />
                    <ul>
                        <li>HTML, CSS, JavaScript, React, MySQL</li>
                        <li>MERN, Agile Development, AWS</li>
                        <li>Git, Heroku</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Resume;

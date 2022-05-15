import React, { useState } from 'react';
import Nav from "../Nav";
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import Resume from "../Resume";

function Header () {
    const [currentPage, handlePageChange] = useState("About");
    const renderPort = () => {
        switch (currentPage) {
            case "About":
                return <About/>;
            case "Portfolio":
                return <Portfolio/>;
            case "Contact":
                return <Contact/>;
            case "Resume":
                return <Resume/>;
            default:
                return <About/>;    
        }
    };
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a className="navbar-git" rel="noreferrer" target="_blank" href="https://github.com/Tez28" >
                        <span className="content is-large" > Courtez M. Cannady</span>
                    </a>
                </div>
            </nav>
            <Nav
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            <main>
                <div>{renderPort(currentPage)}</div>
            </main>
        </div>
    );
}
export default Header;
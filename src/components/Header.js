import '../css/header.css';
import linkedinLogo from '../images/linkedin.webp';
import githubLogo from '../images/github.webp';
import { NavLink }from 'react-router-dom';
import { useState } from "react";

function Header() {
    const activeLink = ({ isActive }) => isActive ? 'activeLink' : 'hover-anim'
    const [active, setActive] = useState(false);
    const [navBar, setNavBar] = useState(false);

    function deActivate() {
        if (active) {
            setActive(false)
            document.body.style.overflow = "visible";
        }
    }

    function hamburgerMode() {
        if (active) {
            setActive(false)
            document.body.style.overflow = "visible";
        } else {
            setActive(true)
            document.body.style.overflow = "hidden";
        }
    }

    function addActive(className) {
        if (active) {
            return className + ' active'
        } else {
            return className
        }
    }

    function navBarBackground() {
        if (window.scrollY >= 600) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }

    window.addEventListener("scroll", navBarBackground)

    return (
        <header className={navBar ? "active" : ""}>
            <nav className={navBar ? "active" : ""}>
                <ul className={addActive("leftNav")} onClick={deActivate}>
                    <li><NavLink to="/" className={activeLink}>Home</NavLink></li>
                    <li><NavLink to="/projects" className={activeLink}>Projects</NavLink></li>
                    <li><NavLink to="/contact" className={activeLink}>Contact</NavLink></li>
                </ul>
                <div className={addActive("hamburger")} onClick={hamburgerMode}>
                    <span className={addActive("bar left")}></span>
                    <span className={addActive("bar gone")}></span>
                    <span className={addActive("bar right")}></span>
                </div>
                <ul className="rightNav">
                    <li className="hover-anim"><a href="https://www.linkedin.com/in/ethan-ikegami/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} width="30px" className="linkedin" /></a></li>
                    <li className="hover-anim"><a href="https://github.com/ikeg225" target="_blank" rel="noopener noreferrer"><img src={githubLogo} width="30px" className="github" /></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
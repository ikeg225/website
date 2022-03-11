import '../css/header.css';
import linkedinLogo from '../images/linkedin.webp';
import githubLogo from '../images/github.webp';
import { NavLink }from 'react-router-dom';
import { useState } from "react";

function Header() {
    const activeLink = ({ isActive }) => isActive ? 'activeLink' : 'hover-anim'
    const [active, setActive] = useState(false);

    function activate() {
        if (window.screen.width <= 425) {
            if (active) {
                setActive(false)
                document.body.style.overflow = "visible";
            } else {
                setActive(true)
                document.body.style.overflow = "hidden";
            }
        }
    }

    function addActive(className) {
        if (active) {
            return className + ' active'
        } else {
            return className
        }
    }

    return (
        <header>
            <nav>
                <ul className={addActive("leftNav")} onClick={activate}>
                    <li><NavLink to="/" className={activeLink}>Home</NavLink></li>
                    <li><NavLink to="/projects" className={activeLink}>Projects</NavLink></li>
                    <li><NavLink to="/contact" className={activeLink}>Contact</NavLink></li>
                </ul>
                <div class={addActive("hamburger")} onClick={activate}>
                    <span class={addActive("bar left")}></span>
                    <span class={addActive("bar gone")}></span>
                    <span class={addActive("bar right")}></span>
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
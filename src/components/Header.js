import '../css/header.css';
import linkedinLogo from '../images/linkedin.webp';
import githubLogo from '../images/github.png';
import { NavLink }from 'react-router-dom';

function Header() {
    const activeLink = ({ isActive }) => isActive ? 'activeLink' : 'hover-anim'

    return (
        <header>
            <nav>
                <ul className="leftNav">
                    <li><NavLink to="/" className={activeLink}>Home</NavLink></li>
                    <li><NavLink to="/projects" className={activeLink}>Projects</NavLink></li>
                    <li><NavLink to="/contact" className={activeLink}>Contact</NavLink></li>
                </ul>
                <ul className="rightNav">
                    <li className="hover-anim"><a href="https://www.linkedin.com/in/ethan-ikegami/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} width="30px" className="linkedin" /></a></li>
                    <li className="hover-anim"><a href="https://github.com/ikeg225" target="_blank" rel="noopener noreferrer"><img src={githubLogo} width="33px" className="github" /></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
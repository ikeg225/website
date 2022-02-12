import linkedinLogo from '../images/linkedin.webp';
import githubLogo from '../images/github.png';

function Header() {
    return (
        <header>
            <nav>
                <ul className="leftNav">
                    <li className="hover-anim"><a href="#">Projects</a></li>
                    <li className="hover-anim"><a href="#">Contact</a></li>
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
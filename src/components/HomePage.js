import Typewriter from 'typewriter-effect';
import me from '../images/me.jpg';
import wf from '../images/wfLogo.png';
import cv from '../images/cvLogo.png';
import dc from '../images/dcLogo.webp';

function HomePage() {
    return (
        <>
            <div className="content">
                <div className="main">
                    <div className="leftMain">
                        <h1>Hey there, my<br></br>name's Ethan.</h1> 
                        <h2>I'm a<Typewriter options={{
                            strings: ['web developer', 'basketball junkie', 'software engineer', 
                            'nature enthusiast', 'data scientist', 'eagle scout', 'internet marketer'],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: "wrap"
                            }}/></h2>
                        <h2>based in Berkeley, CA.</h2>
                    </div>
                    <div className="rightMain">
                        <img src={me} />
                    </div>
                </div>
                <div className="aboutMe">
                    <h1>More about me</h1>
                    <h2>I am an undergraduate student at <span className="green">UC Berkeley </span>studying 
                        <span className="green"> Computer Science 
                        and Data Science</span> with an emphasis in business and industrial analytics. 
                        I am passionate about using software applications and machine learning 
                        models that I've built to improve people's everyday lives. I also am an
                        <span className="green"> entrepreneur by heart</span> and love working on internet 
                        marketing projects that
                        reach hundreds of thousands of people. </h2>
                    <h2>During my free time, I love playing/watching basketball, going on hikes, 
                        late night runs, and trying out new foods. 
                    </h2>
                </div>
                <div className="experience">
                    <h1>My experience</h1>
                    <h2>Last summer, I interned at CoreVest Finance as a <span className="green">data scientist</span>. My 
                        partner and I built a profile persona of customers based on previously 
                        inaccessible application data using custom <span className="green">python scripts and OCR </span>
                        software. Using Random Forests, we created a model that predicted with <span className="green">97.82% 
                        accuracy</span> if a loan will be closed, withdrawn, or rejected. This information 
                        would not be known until <span className="green">months or years</span> into the loan process.  
                    </h2>
                    <h2>I am currently a <span className="green">web development intern</span> at The Daily Californian which 
                        is the news outlet of the UC Berkeley campus and the Berkeley, CA 
                        community. We are transitioning their WordPress website to a React 
                        based one. Using <span className="green">GatsbyJS</span>, which is a static site-generator, our final 
                        site will be able to load thousands of static pages and significantly 
                        improve the response time of the website. We are using <span className="green">GraphQL</span> to query 
                        data from WordPress which allows writers at the organization to still use 
                        the familiar WP interface. 
                    </h2>
                    <h2>This summer, I will be interning at Wells Fargo through their Technology 
                        Analyst Program as a <span className="green">software engineer</span>.
                    </h2>
                    <div className="logos">
                        <img className="cv" src={cv} width="200px" />
                        <img className="dc" src={dc} width="100px" />
                        <img className="wf" src={wf} width="110px" />
                    </div>
                </div>
                <div className="resume">
                    <h1>Resume</h1>
                    <h2>For a more concise version of my experience highlighting my most 
                        relevant skills, please checkout my resume below!</h2>
                    <a href="https://drive.google.com/file/d/1eh9MHICeqpAvNvy9t7nZx5iVEB0RWOG1/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button>Resume</button></a>
                </div>
            </div>
        </>
    )
}

export default HomePage
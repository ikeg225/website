import '../css/homepage.css';
import Typewriter from 'typewriter-effect';
import me from '../images/ethanikegami.jpg';
import cv from '../images/sportsquiz.jpg';
import dc from '../images/dailycal.jpg';
import Project from './SingleProject';
// import resume from '../data/Ethan-Ikegami-Resume.pdf';

function HomePage() {
    return (
        <>
            <div className="content">
                <div className="main">
                    <div className="leftMain">
                        <h1>Hey there, my<br></br>name's Ethan!</h1> 
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
                        <img src={me} alt="picture of ethan ikegami"/>
                    </div>
                </div>
                <div className="aboutMe">
                    <h1>More about me</h1>
                    <div className="whiteBack">
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
                </div>
                <div className="experience">
                    <h1>My experience</h1>
                    {/* <div className="whiteBack">
                        <h2>I started a website called Sports Quiz which is an interactive sports site that quizzes users on
                            sports related topics. It has reached over 315K users, 5M pageviews, and served more than 16.5M ad impressions 
                            during the site's lifetime. The website was built using <span className="green">Typescript</span>, <span className="green">TailwindCSS</span>, and 
                            NextJS with incremental static regeneration. The quiz application of the website was built separately and is a <span className="green">MERN</span> (MongoDB, Express, ReactJS, NodeJS) fullstack application built from scratch.
                        </h2>
                        <h2>I am currently a <span className="green">web developer intern</span> at The Daily Californian which 
                            is the news outlet of the UC Berkeley campus and the Berkeley, CA 
                            community. We are transitioning their WordPress website to a React 
                            based one. Using <span className="green">NextJS</span>, which supports hybrid static and server side
                            rendering, our final site will be able to load thousands of static pages and significantly 
                            improve the response time of the website. We are using custom built <span className="green">PHP APIs</span> that query 
                            data from WordPress which allows writers at the organization to still use the familiar WP interface. 
                        </h2>
                        <h2>This summer, I interned at Wells Fargo through their Technology Program as 
                            a <span className="green">software engineer</span>.
                        </h2>
                        <div className="logos">
                            <img className="cv" src={cv} />
                            <img className="dc" src={dc} />
                            <img className="wf" src={wf} />
                        </div>
                    </div> */}
                    <div className="homepageInternships">
                        <Project 
                            name="The Daily Californian"
                            category=""
                            key={1}
                            image="/dailycal.webp"
                            description={`
                            <ul>
                                <li>Improved performance & enhanced scalability of UC Berkeley's news site by migrating the existing WordPress app to NextJS</li>
                                <li>Queried content from WordPress by constructing custom PHP APIs, enabling writers to utilize a familiar CMS interface</li>
                                <li>Implemented header bidding with the PrebidJS wrapper and Google Ad Manager increasing ad revenue by 35%</li>
                            </ul>`}
                            technology="Full Stack Engineer — React, NextJS, NodeJS, PHP"
                            moreinfo=""
                        />
                        <Project 
                            name="Wells Fargo"
                            category=""
                            key={1}
                            image="/wellfargo.jpg"
                            description={`
                            <ul>
                                <li>Augmented automation and scalability using IAC with Terraform and Azure - integrated with the preexisting CI/CD pipeline</li>
                                <li>Ideated and developed an AngularJS application for interns to expand their professional network and deployed it to the cloud</li>
                                <li>Automated tasks in Jira and cross-validated data in Python, saving time and improving data accuracy for executives</li>
                            </ul>`}
                            technology="Software Engineer Intern — AngularJS, Agile Development, Microsoft Azure Cloud"
                            moreinfo=""
                        />
                        <Project 
                            name="CoreVest Finance"
                            category=""
                            key={1}
                            image="/corevest.webp"
                            description={`
                            <ul>
                                <li>Constructed a profile for primary clients using collected data, aiding in identifying future prospects and generating leads</li>
                                <li>Transformed previously inaccessible data in thousands of scanned PDFs to usable data for exploration and analysis</li>
                                <li>Developed a Random Forest Classifier to predict loan status months into the future with 97.2% accuracy</li>
                            </ul>`}
                            technology="Data Science Intern — Python, RegEx, OCR, Pandas, NumPy, Scikit-Learn"
                            moreinfo=""
                        />
                    </div>
                </div>
                <div className="resume">
                    <h1>Resume</h1>
                    <div className="whiteBack">
                        <h2>For a more concise version of my experience highlighting my most 
                            relevant skills, please checkout my resume below!</h2>
                        <div className="resButton">
                            <a href="https://drive.google.com/file/d/1s1k3HHZQ7rkWb7b45OSJQaLdRi8GWoQi/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button>Resume</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
import '../css/homepage.css';
import Typewriter from 'typewriter-effect';
import me from '../images/ethanikegami.jpg';
import cv from '../images/sportsquiz.jpg';
import dc from '../images/dailycal.jpg';
import Project from './SingleProject';

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
                    <div className="homepageInternships">
                        <Project 
                            name="DoorDash"
                            category=""
                            key={1}
                            image="/doordash.png"
                            description={`
                            <ul>
                                <li>Engineered a full stack app that established DashMart as the source of truth for facility data management, which enhanced data quality & consistency, improved sox compliance, reduced on call load, and saved tool/process operation costs</li>
                                <li>Implemented service endpoints with Protobuf & gRPC - integrated data logging/backfill, allowlist APIs, and unit/pulse tests</li>
                                <li>Developed the BFF and updated the UI with React & GraphQL, streamlining operators' data access & modification for facilities</li>
                            </ul>`}
                            technology="Software Engineer — React, Typescript, Kotlin, PostgreSQL, CockroachDB, Python"
                            moreinfo=""
                        />
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
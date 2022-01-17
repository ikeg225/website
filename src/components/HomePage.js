import Typewriter from 'typewriter-effect';
import me from '../images/me.jpg';

function HomePage() {
    return (
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
    )
}

export default HomePage
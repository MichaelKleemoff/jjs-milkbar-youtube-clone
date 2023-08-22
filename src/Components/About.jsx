import logo from "../images/yt_logo_light.png";
import "../App.css";
// import { BsYoutube } from "react-icons/bs";

function About() {
  return (
    <>
      <div id="About" className="font-link">
        <h2>
          <strong>About this project...</strong>
        </h2>
        <div className="d-flex bd-highlight">
          <div>
            In this project, we used Vite React to create a YouTube clone that
            lets you search for videos using the YouTube API. From the search
            results, you can select a video and play it. We have also included a
            comment section below the video where you can log feedback for the
            videos you view.
          </div>
          <div className="p-3 flex-fill bd-highlight">
            <img src={logo} alt="YouTube Logo" width="200" height="55" />
          </div>
        </div>
        <br />
        <br />
        <h4>
          <strong>About the developers...</strong>
        </h4>
        <ul className="youtube-bullet">
          <li className="list-container">
            <h5>
              <a href="https://github.com/Lamb144" rel="noreferrer">
                Alvin Johnson
              </a>
            </h5>
            <p>
              I am a full-stack JavaScript developer from the Northeast Bronx. I
              am passionate about learning new technologies and building
              innovative solutions. I have a strong foundation in JavaScript,
              CSS, and HTML, and I am also proficient in Java and C#. I am
              currently working on expanding my knowledge of React, Node.js, and
              other backend technologies.
            </p>
          </li>
          <li className="list-container">
            <h5>
              <a href="https://github.com/Jameel914" rel="noreferrer">
                Jameel Ibrahim
              </a>
            </h5>
            <p>
              Aspiring Full Stack Developer passionate about Web Development.
            </p>
          </li>
          <li className="list-container">
            <h5>
              <a href="https://github.com/MichaelKleemoff" rel="noreferrer">
                Michael Kleemoff
              </a>
            </h5>
            <p>
              I am a passionate full-stack software engineer at the Pursuit
              Fellowship program in Long Island City, NY, who is interested in
              AI/ML/VR/AR potential.
            </p>
          </li>
          <li className="list-container">
            <h5>
              <a href="https://github.com/rboyce212" rel="noreferrer">
                Rich Boyce
              </a>
            </h5>
            <p>
              After 16 years working for two tech start-ups, I am now at Pursuit
              learning to become a Full Stack Developer.
              <a
                href="https://www.linkedin.com/in/richard-boyce-nyc/"
                rel="noreferrer"
              >
                <br />
                LinkedIn
              </a>
            </p>
          </li>
          <li className="list-container">
            <h5>
              <a href="https://github.com/Lombarudi24" rel="noreferrer">
                Rubens Lombard
              </a>
            </h5>
            <p>
              Full Stack Web developer with interest in app development and
              cybersecurity. I am a fellow at Pursuit pursuing a dream to
              transform thoughts into reality.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default About;

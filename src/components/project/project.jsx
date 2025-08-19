import "./project.css";
import ComplySimplify from "../../assets/Projects/ComplySimplify.png";
import EMS from "../../assets/Projects/EMS.png";
import foodfront from "../../assets/Projects/foodfront.png"

const Project = () => {
  return (
    <div className="Project">
      <div className="background">
        <div className="heading">
          # Project
          <div className="line"></div>
        </div>

        <div className="ParentDiv">
          <div className="ChildDivs">
            <div className="Photo">
              <img className="ProjectImage" src={foodfront} alt="Logo" />
            </div>
            <div className="Technology">
              <p>html ,css,bootstrap,javascript</p>
            </div>
            <div className="Details">
              <h3>FOODFRONT </h3>
              <a
                href="https://gulshan-foodfront.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="GitButton">Live {"<~>"}</div>{" "}
              </a>
            </div>
          </div>
          <div className="ChildDivs">
            <div className="Photo">
              <img className="ProjectImage" src={ComplySimplify} alt="Logo" />
            </div>
            <div className="Technology">
              <p>ReactJS, NodeJS, Express, Bootstrap, MongoDB, CSS ,python</p>
            </div>
            <div className="Details">
              <h3>Deaf and Mute communication </h3>
              <a
                href="https://github.com/meergulshan/Face-Recognization-System"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="GitButton">Live {"<~>"}</div>{" "}
              </a>
            </div>
          </div>
          <div className="ChildDivs">
            <div className="Photo">
              <img className="ProjectImage" src={EMS} alt="Logo" />
            </div>
            <div className="Technology">
              <p>Java, JavaFX, File Handling</p>
            </div>
            <div className="Details">
              <h3>Energy Management System</h3>
              <a
                href=".."
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="GitButton">Live {"<~>"}</div>{" "}
              </a>
            </div>
          </div>
          <a
            className="ViewAll"
            href="https://github.com/meergulshan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all {"~~>"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;

import "./project.css";
import ComplySimplify from "../../assets/Projects/ComplySimplify.png";
import OyeeCar from "../../assets/Projects/OyeeCar.png";
import EMS from "../../assets/Projects/EMS.png";

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
              <img className="ProjectImage" src={ComplySimplify} alt="Logo" />
            </div>
            <div className="Technology">
              <p>ReactJS, NodeJS, Express, Bootstrap, MongoDB, Python</p>
            </div>
            <div className="Details">
              <h3>Mute and Deaf Communication </h3>
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
              <img className="ProjectImage" src={OyeeCar} alt="Logo" />
            </div>
            <div className="Technology">
              <p> HTMl, CSS, Bootstrap</p>
            </div>
            <div className="Details">
              <h3>FoodFront</h3>
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
              <img className="ProjectImage" src={EMS} alt="Logo" />
            </div>
            <div className="Technology">
              <p>ReactJs, NodeJS ,Express , MongoDB</p>
            </div>
            <div className="Details">
              <h3>Note taking App</h3>
              <a
                href="https://github.com/meergulshan/gulshan-mern-10pshine"
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

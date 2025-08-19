// "gsap": "^3.12.3",
// "react-gsap": "^3.2.1",

import "./landingpage.css";
import Profile from "../../assets/main_profile.png";
import Typed from "react-typed";
const LandingPage = () => {

  return (
    <div className="landingpage">
      {/* <div className="dots"></div> */}
      <div className="container">
        <div className="glass">
          <div className="content">
            <br />
            <Typed
              strings={[
                "MernStack Developer ",
                "Web designer",
                "Front-end Developer",
                "Software Developer",
              ]}
              typeSpeed={30}
              backSpeed={50}
              loop
            />
            <div className="containerButton">
              <div className="ButtonCV" >
              <a href="https://drive.google.com/drive/my-drive?q=type:pdf%20parent:0ADSXHt0ia-OfUk9PVA" target="_blank"
                rel="noopener noreferrer" className="ButtonCV">
                Download CV
              </a>
              </div>
            </div>
          </div>

          <div className="contentprofile">
            <img className="profile" src={Profile} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

import "./skills.css";
import htmlLogo from "../../assets/Skills/html.png";
import cssLogo from "../../assets/Skills/css-3.png";
import reactLogo from "../../assets/Skills/react.png";
import nodejsLogo from "../../assets/Skills/nodejs.png";
import MongoDBLogo from "../../assets/Skills/MongoDB.png";
import bootstrapLogo from "../../assets/Skills/bootstrap.png";
import javascriptLogo from "../../assets/Skills/java-script.png";

import cLogo from "../../assets/Skills/c.png";
import cppLogo from "../../assets/Skills/cpp.png";

const skillItems = [
  { src: htmlLogo, label: "HTML" },
  { src: cssLogo, label: "CSS" },
  { src: reactLogo, label: "REACT" },
  { src: bootstrapLogo, label: "BOOTSTRAP" },
  { src: javascriptLogo, label: "JAVASCRIPT" },
  { src: nodejsLogo, label: "NODE JS" },
  { src: MongoDBLogo, label: "MongoDB" },
  { src: cppLogo, label: "C++" },
  { src: cLogo, label: "C" },
];

const Skills = () => {
  return (
    <div className="Skills">
      <div className="background">
        <div className="heading">
          # Skills
          <div className="line"></div>
        </div>

        <div className="contentDiv">
          <div className="TickerWrapper">
            <div className="SkillsTicker">
              {skillItems.map((item, index) => (
                <figure className="LogoContainer" key={`a-${index}`}>
                  <img className="LogoImage" src={item.src} alt={item.label} />
                  <figcaption className="SkillName">{item.label}</figcaption>
                </figure>
              ))}
              {skillItems.map((item, index) => (
                <figure className="LogoContainer" key={`b-${index}`}>
                  <img className="LogoImage" src={item.src} alt={item.label} />
                  <figcaption className="SkillName">{item.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="ParentDiv">
            {/* <div className="UsingNow">
              <span className="SkillsHeading">Using Now:</span>

              <div className="SkillsImages">
                <div className="SkillsImagesFrontend">
                  <figure className="LogoContainer">
                    <img className="LogoImage" src={htmlLogo} alt="HTML" />
                    <figcaption className="SkillName">HTML</figcaption>
                  </figure>
                  <figure className="LogoContainer">
                    <img className="LogoImage" src={cssLogo} alt="Logo" />
                    <figcaption className="SkillName">CSS</figcaption>
                  </figure>
                  <figure className="LogoContainer">
                    <img className="LogoImage" src={reactLogo} alt="Logo" />
                    <figcaption className="SkillName">REACT</figcaption>
                  </figure>
                  <figure className="LogoContainer">
                    <img className="LogoImage" src={bootstrapLogo} alt="Logo" />
                    <figcaption className="SkillName">BOOTSTRAP</figcaption>
                  </figure>
                </div>

                <div className="SkillsImagesBackend">
                  <figure className="LogoContainer">
                    <img
                      className="LogoImage"
                      src={javascriptLogo}
                      alt="Logo"
                    />
                    <figcaption className="SkillName">JAVASCRIPT</figcaption>
                  </figure>
                  <figure className="LogoContainer">
                    <img className="LogoImage" src={nodejsLogo} alt="Logo" />
                    <figcaption className="SkillName">NODE JS</figcaption>
                  </figure>
                  <figure className="LogoContainer">
                    <img className="LogoImage" src={MongoDBLogo} alt="Logo" />
                    <figcaption className="SkillName">MongoDB</figcaption>
                  </figure>
                </div>
              </div>
            </div> */}

            {/* / */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

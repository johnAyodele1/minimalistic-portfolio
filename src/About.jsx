import { motion } from "framer-motion";
import Image from "../src/assets/1/john-towner-3Kv48NS4WUU-unsplash.jpg";
import "./about.css";
const About = () => {
  return (
    <motion.div
      initial={{
        translateY: "100%",
        // backgroundColor: "#000",
      }}
      animate={{
        // height: "100vh",
        translateY: "0%",
        backgroundColor: "#ece7e1",
      }}
      transition={{
        duration: "1",
      }}
    >
      <div className="nav--left">
        <div className="nav--left--item">
          <a className="nav--left--link" href="/">
            HOME
          </a>
        </div>
        <div className="nav--line"></div>
        <div className="nav--left--item nav--copyright">
          <div className="copyright">©/2024</div>
        </div>
      </div>
      <div className="wrapper--about">
        <div className="about--text">
          <div className="header--mask">About</div>
          <div className="about--description">
            <span className="quote">
              I'm John. A designer, Software Engineer and problem solver. <br />
            </span>
            <br />
            <div className="about--me">
              The cusp of art and technology has always fascinated me and I've
              never been afraid to just jump in and give it a go, whether it's
              Design, Sketch&nbsp;or CSS. I’ve always love the act of
              creativity..
            </div>
            <br />
            <div className="about--me">
              Fast forward to 2025 and I’ve tried it all, from Basic Web Design
              to Web Design, Animation, HTML/CSS, Complex Web Development, React
              and Product Management. Everything I have done, small or big, has
              been a vital stepping stone for where I am today.
            </div>
            <br />
            <div className="about--me">
              What excites me most about being a Software Engineer is being able
              to design and create things that have purpose and solve real
              problems. It goes beyond designing buttons and websites and
              involves having a passion for designing experiences and solutions
              that help people. Leaning into customer insight and understanding
              their needs, finding the right problems to solve, delivering
              solutions as quickly as possible, learning from those and then
              iterating and improving that value over time is the key to great
              development.
            </div>
            <br />
            <div className="about--me">
              This is one of my favourite quotes by Peter Drucker :
            </div>
            <br />
            <span className="quote">
              “There is nothing so useless as doing efficiently that which
              should not be done at all.”
            </span>
            <br />
            <div className="about--me">
              This resonates so deeply with me because I have no desire to make
              pretty things just for the sake of it. Some people love
              that!&nbsp;But it's not for me. I only want to make, design or
              build ideas and products that are real, that matter and have an
              impact in the world.
            </div>
            <span className="header--a">Experience</span>
            <div className="about--me">
              <br />- Certified Software Engineer
              <br />- 3 years experience in Digital Design, Web Development,
              Advertising and Product&nbsp;Development
              <br />
              Within those 5 years, I have:
              <br />- About 2 years experience in React
              <br />- 3 years experience in Front-end Web Development
              <br />- 1 year experience in Framer Motion
              <br />
              <span className="header--a">Skills</span>
              <br />
              <div
                className="skills"
                style={{
                  maxWidth: "90rem",
                  fontWeight: "500",
                  paddingBottom: "5rem",
                }}
              >
                HTML & CSS / Tailwind css / JavaScript / User Research / Agile
                Methodologies / Collaboration / React / Framer Motion &amp; /
                Webflow Development / Responsive Web Design
              </div>
            </div>
          </div>
          <a
            href="../src/assets/cv.pdf"
            target="_blank"
            className="about--button"
          >
            My CV
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

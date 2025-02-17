import { motion } from "framer-motion";
import "./work.css";

const Work = () => {
  return (
    <>
      <motion.div
        initial={{
          backgroundColor: "#ece7e1",
          translateY: "100vh",
        }}
        animate={{
          backgroundColor: "#1a1818",
          translateY: 0,
        }}
        transition={{
          duration: 1,
        }}
        style={{
          color: "#ece7e1",
          margin: "0",

          width: "100%",
          height: "109vh",
        }}
      >
        <div className="nav--left">
          <div className="nav--left--item off--white">
            <a className="nav--left--link off--white" href="/">
              HOME
            </a>
          </div>
          <div className="nav--line--offwhite"></div>
          <div className="nav--left--item nav--copyright">
            <div className="copyright off--white">©/2024</div>
          </div>
        </div>
        <div className="wrapper">
          <div className="section--left">
            <div className=" content content--main">
              <div className="header--mask">
                <h1 className="header swipe--up off--white">WORK</h1>
              </div>
              <div className="description--mask">
                <p className="description off--white">
                  A collection of projects that showcase my passion for creative
                  problem-solving and collaboration while also exploring the
                  intersection of design and technology
                  <span className="off--white--span">
                    The world of web design and development is constantly
                    evolving and so has my role over the last 5 years. I'm still
                    learning and gaining new skills every day.
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
          <div className="section--right">
            <div className="nav">
              <div className="nav--item">
                <a href="/omnifood" className="nav--link off--white">
                  OMNIFOOD
                </a>
              </div>

              <div className="nav--item">
                <a href="/bankist" className="nav--link off--white off--link">
                  BANKIST
                </a>
              </div>
              <div className="nav--item--offwhite">
                <a href="/mapty" className="nav--link off--white off--link">
                  MAPTY
                </a>
              </div>
              <div className="nav--item">
                <a href="/forkify" className="nav--link off--white off--link">
                  FORKIFY
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Work;

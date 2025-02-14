import { motion } from "framer-motion";
const Contact = () => {
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
                <h1
                  className="header swipe--up off--white header--large"
                  style={{
                    marginTop: "5rem",
                  }}
                >
                  Hello.
                </h1>
              </div>
              <div className="description--mask">
                <p className="description off--white is--contact">
                  Need a beautiful, well-structured website that you can own and
                  maintain yourself? Get in touch.
                  <span
                    style={{
                      display: "block",
                      marginTop: "2rem",
                      marginBottom: "5rem",
                      fontSize: "1.3rem",
                      fontWeight: "400",
                    }}
                  >
                    Email:{" "}
                    <a
                      href="mailto:johnayodele095@gmail.com"
                      class="link"
                      style={{
                        color: "#ece7e1",
                      }}
                    >
                      johnayodele095@gmail.com
                    </a>
                    <br />
                    On the Internet:
                    <a href="https://www.linkedin.com/in/softwarepro100">
                      LinkedIn
                    </a>
                    /
                    <a href="https://www.linkedin.com/in/softwarepro100">
                      Twitter
                    </a>
                    /
                    <a href="https://www.linkedin.com/in/softwarepro100">
                      GitHub
                    </a>
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;

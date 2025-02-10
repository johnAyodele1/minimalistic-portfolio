const Home = () => {
  return (
    <div>
      <div className="nav--left">
        <div className="nav--left--item">
          <a
            className="nav--left--link"
            href="https://www.linkedin.com/in/softwarepro100"
          >
            LI
          </a>
        </div>
        <div className="nav--left--item">
          <a className="nav--left--link" href="">
            TW
          </a>
        </div>
        <div className="nav--left--item">
          <a className="nav--left--link" href="">
            GH
          </a>
        </div>
        <div className="nav--line"></div>
        <div className="nav--left--item nav--copyright">
          <div className="copyright">©/2024</div>
        </div>
      </div>
      <div className="wrapper">
        <div className="section--left">
          <div className=" content content--main">
            <div className="header--mask">
              <h1 className="header swipe--up">John Ayodele</h1>
            </div>
            <div className="description--mask">
              <p className="description">
                Website Developer / React Developer /Mobile App Developer
                <span
                  style={{
                    display: "block",
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontSize: "1.3rem",
                    fontWeight: "400",
                  }}
                >
                  Highly Motivated Front-end Developer with expertise in
                  creating user-friendly interface.
                </span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
        <div className="section--right">
          <div className="nav">
            <div className="nav--item ">
              <a href="/work" className="nav--link">
                WORKS
              </a>
            </div>
            <div className="nav--item">
              <a href="/about" className="nav--link">
                ABOUT
              </a>
            </div>
            <div className="nav--item">
              <a href="/shop" className="nav--link">
                SHOP
              </a>
            </div>
            <div className="nav--item">
              <a href="/contact" className="nav--link">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

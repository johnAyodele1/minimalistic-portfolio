const Shop = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundColor: "#ece7e1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: "5rem",
            fontStyle: "italic",
            padding: "2rem",
          }}
        >
          Coming Soon....
        </h1>
        <a
          href="/"
          target="_blank"
          style={{
            marginLeft: "1rem",
            fontWeight: "600",
          }}
          className="about--button"
        >
          Home
        </a>
      </div>
    </>
  );
};

export default Shop;

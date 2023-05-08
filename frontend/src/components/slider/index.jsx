function Slider() {
  return (
    <div>
      <img
        className="d-block w-100"
        src="src/assets/banner.jpg"
        alt="First slide"
      />
      <h1
        style={{
          textAlign: "center",
          marginTop: "80px",
          marginBottom: "40px",
          letterSpacing: "3px",
        }}
      >
        DAILY UPDATE & SHRING
      </h1>
      <h6 style={{ textAlign: "center", color: "grey", letterSpacing: "3px" }}>
        OPTIONAL TAGLINE CAN GO HERE
      </h6>
    </div>
  );
}

export default Slider;

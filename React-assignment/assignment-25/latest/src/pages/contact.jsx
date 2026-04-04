function Contact() {
  const container = {
    textAlign: "center",
    marginTop: "50px"
  };

  const inputStyle = {
    padding: "10px",
    width: "250px",
    margin: "10px"
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    cursor: "pointer"
  };

  return (
    <div style={container}>
      <h1 style={{ color: "red" }}>Contact Page</h1>

      <form>
        <input type="text" placeholder="Enter Name" style={inputStyle} /><br />
        <input type="email" placeholder="Enter Email" style={inputStyle} /><br />
        <textarea placeholder="Enter Message" style={inputStyle}></textarea><br />
        <button style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
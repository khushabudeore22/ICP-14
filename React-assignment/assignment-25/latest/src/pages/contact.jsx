function Contact() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "red" }}>Contact Page</h1>

      <form>
        <input
          type="text"
          placeholder="Enter Name"
          style={{ padding: "10px", margin: "10px" }}
        /><br />

        <input
          type="email"
          placeholder="Enter Email"
          style={{ padding: "10px", margin: "10px" }}
        /><br />

        <textarea
          placeholder="Enter Message"
          style={{ padding: "10px", margin: "10px" }}
        ></textarea><br />

        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
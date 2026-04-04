import React from "react";

function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>

      <form>
        <input type="text" placeholder="Enter Name" />
        <br /><br />

        <input type="email" placeholder="Enter Email" />
        <br /><br />

        <textarea placeholder="Enter Message"></textarea>
        <br /><br />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
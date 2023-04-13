import React from "react";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      {PaymentResponse.bio && PaymentResponse.bio.length > 1 ? <p>{PaymentResponse.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;

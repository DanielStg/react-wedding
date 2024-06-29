import React from "react";

const Home = () => {
  const script = document.createElement("script");
  script.src = "../js/timer.js";
  document.body.appendChild(script);

  return (
    <div className="welcome_page">
      <p id="text_welcome">
        <b>THE WEDDING OF</b>
      </p>
      <p>
        <b>Loren & Daniel</b>
      </p>
      <p>
        <b>8th February 2025</b>
      </p>
      <a href="./RSVP">
        <button id="button_rsvp" type="button">
          RSVP
        </button>
      </a>
      {/* <!-- Display the countdown timer in an element --> <!-- LATER: Load as session to avoid lag --> */}
      <p>The big day is in:</p>
      <p id="timer"></p>
    </div>
  );
};

export default Home;

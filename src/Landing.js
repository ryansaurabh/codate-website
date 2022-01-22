import React from "react";
import "./landing.css";

export default function Landing() {
  return (
    <>
      <section className="landing">
        <div>
          <h3 className="txt1">Your Profile</h3>
          <h1 style={{ width: "800px", marginTop: "-5px" }}>
            Take care of your profile and get the best matches
          </h1>
          <p className="txt3">
            atin professor at Hampden-obscure Latin words, consectetur, from a
            Lorem Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source. Lorem Ipsum
            comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
            BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
            dolor sit amet..", comes from a line in section 1.10.32.
          </p>
          <p className="txt3">
            {" "}
            of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
            by Cicero, written in 45 BC. This book is a treatise on the theory
            of ethics, very popular during the Renaissance. The first line of
            Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32.
          </p>
        </div>
        <div className="phone"></div>
      </section>

      <section className="intro">
        <div className="phone2"></div>
      </section>
      <section className="page-main-container ">
        <div className="displayflexJCAC">
          <div>
            <h4 className="messenger">Messenger</h4>
            <p className="txtStyle">Chat with your match!</p>
            <p style={{ color: "#5B5A79" }}>
              Send texts, pictures and emojis via intuitive built-in messenger
            </p>
          </div>
        </div>
        <div className="displayflexJCAC">
          <div className="phone2"></div>
        </div>
      </section>
      <section className="onBoard">
        <div>
          <p className="txtStyle">Onboarding</p>
          <p style={{ color: "#5B5A79", textAlign: "center" }}>
            hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div className="phone2"> </div>
          <div className="phone2"> </div>
          <div className="phone2"> </div>
        </div>
      </section>
      <section className="footer">
        <div>
          <h1 className="txtStyle">Subscribe with us</h1>
        </div>
        <div className="displayflexJCAC">
          <input
            className="email"
            type="email"
            placeholder="Enter your Email"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="icon">
            <p>Home</p>
            <p>About Us</p>
            <p>Popular Members</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className=" bottom">
          <div> 

          <p>Terms & conditions</p>
          </div>
          <div>
          <p>privavy policy</p>

          </div>
          <div>
          <p>Help center</p>

          </div>
        </div>
      </section>

    </>
  );
}

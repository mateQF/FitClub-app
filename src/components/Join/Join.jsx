import { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const {
    VITE_REACT_APP_SERVICE_ID,
    VITE_REACT_APP_TEMPLATE_ID,
    VITE_REACT_APP_USER_ID,
  } = import.meta.env;
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        VITE_REACT_APP_SERVICE_ID,
        VITE_REACT_APP_TEMPLATE_ID,
        form.current,
        VITE_REACT_APP_USER_ID
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={handleSubmit}>
          <input
            type="email"
            name="user_email"
            placeholder="jondoe@mail.com"
            required
          />
          <button className="btn btn-j">Join now</button>
        </form>
      </div>
    </section>
  );
};

export default Join;

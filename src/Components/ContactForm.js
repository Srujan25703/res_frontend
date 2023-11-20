import { useState } from "react";

function ContactForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setPhone] = useState("");
  const [message, setReason] = useState("");

  const arr = [name, email, subject, message];

  const handleClick = () => {
    props.getState(arr);
  };

  return (
    <div className="container" style={{ maxWidth: "40%", margin: "0px auto" }}>
      <div className="form-group">
        <label htmlFor="name" className="text-white">
          Your Name:
        </label>
        <input
          onChange={(event) => setName(event.target.value)}
          id="name"
          className="form-control mb-2 text-white bg-dark"
          type="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="text-white">
          Your Email:
        </label>
        <input
          onChange={(event) => setEmail(event.target.value)}
          id="email"
          className="form-control mb-2 text-white bg-dark"
          type="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber" className="text-white">
          subject:
        </label>
        <input
          onChange={(event) => setPhone(event.target.value)}
          id="phoneNumber"
          className="form-control mb-2 text-white bg-dark"
          type="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="reason" className="text-white">
          message:
        </label>
        <textarea
          onChange={(event) => setReason(event.target.value)}
          id="reason"
          className="form-control mb-2 text-white bg-dark"
          type="text"
        />
      </div>
      <button
        onClick={handleClick}
        className="btn btn-danger my-3 d-block mx-auto"
        type="submit"
      >
        submit
      </button>
    </div>
  );
}

export default ContactForm;

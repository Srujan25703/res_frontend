import { useState } from "react";

function BookingForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [noOfPeople, setPeople] = useState("");
  const [time, setTime] = useState("");
  const [menu, setMenu] = useState("");

  const arr = [name, email, phoneNumber, date, noOfPeople, time, menu];

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
          Your phone number:
        </label>
        <input
          onChange={(event) => setPhone(event.target.value)}
          id="phoneNumber"
          className="form-control mb-2 text-white bg-dark"
          type="number"
        />
      </div>
      <div className="form-group">
        <label htmlFor="date" className="text-white">
          Booking date:
        </label>
        <input
          onChange={(event) => setDate(event.target.value)}
          id="date"
          className="form-control mb-2 text-white bg-dark"
          type="date"
        />
      </div>
      <div className="form-group">
        <label htmlFor="noOfPeople" className="text-white">
          Number of people:
        </label>
        <input
          onChange={(event) => setPeople(event.target.value)}
          id="noOfPeople"
          className="form-control mb-2 text-white bg-dark"
          type="number"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber" className="text-white">
          time:
        </label>
        <input
          onChange={(event) => setTime(event.target.value)}
          className="form-control mb-2 text-white bg-dark"
          type="text"
          placeholder="enter time(1:00pm - 2:00pm"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber" className="text-white">
          Menu:
        </label>
        <textarea
          onChange={(event) => setMenu(event.target.value)}
          className="form-control mb-2 text-white bg-dark"
          type="text"
        />
      </div>
      <button
        onClick={handleClick}
        className="btn btn-success my-3 d-block mx-auto"
        type="submit"
      >
        Book a table
      </button>
    </div>
  );
}

export default BookingForm;

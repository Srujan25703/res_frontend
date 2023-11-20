import { useState } from "react";
import ContactForm from "./ContactForm";
import Axios from "axios";

function CancelBooking() {
  const [arr, setArr] = useState([]);

  const getState = (childData) => {
    setArr(childData);
  };

  const handleCancelSubmit = () => {
    const data = {
      name: arr[0],
      email: arr[1],
      subject: arr[2],
      message: arr[3], // Assuming reason for cancellation is in the fourth position of the array
    };

    Axios.post(
      "https://platesandpleasure1.onrender.com/contactRoute/create-contact",
      data
    )
      .then((res) => {
        if (res.status === 200) {
          alert("Booking canceled successfully");
        } else {
          alert("Unexpected status code: " + res.status);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("An error occurred while canceling the booking");
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h4>Contact</h4>
          <h2>Contact Us</h2>
        </div>
      </div>

      <div data-aos="fade-up">
        <iframe
          title="Google Map"
          width="1500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30452.785225365104!2d78.38912893009986!3d17.431062087228593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cc62a87613%3A0xa8317fa22362be49!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1698641854302!5m2!1sen!2sin"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          {/* Left column */}
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>ABC Street, XYZ, India 500033</p>
              </div>

              <div className="open-hours">
                <i className="bi bi-clock"></i>
                <h4>Open Hours:</h4>
                <p>
                  Monday-Sunday:
                  <br />
                  11:00 AM - 11:00 PM
                </p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>platespleasure@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91 11111 11111</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form onSubmit={handleCancelSubmit}>
              <ContactForm getState={getState} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CancelBooking;

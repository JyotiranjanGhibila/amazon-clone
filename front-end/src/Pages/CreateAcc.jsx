import React, { useState } from "react";
import amazon from "../Asset/amaz.png";
import "../Styles/CreateAcc.css";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const CreateAcc = () => {
  const [name, setName] = useState("");
  const [mobile, setMob] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    const data = { name, mobile, email, pass };
    await axios
      .post(`http://localhost:8080/user/register`, data)
      .then((res) => {
        console.log(res.data);
        navigate("/user/signin");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <Link to="/">
          <div className="amazon_logo">
            <img src={amazon} alt="logo" className="logo" />
            <span>.in</span>
          </div>
        </Link>
        <div className="account__form">
          <div>
            <h1 className="create__acc">Create Account</h1>
          </div>
          <div>
            <h3>Your name</h3>
            <input
              type="text"
              placeholder="First and last name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <h3>Mobile number</h3>
            <input
              type="number"
              placeholder="Mobile number"
              value={mobile}
              onChange={(e) => setMob(e.target.value)}
              required
            />
          </div>
          <div>
            <h3>Email</h3>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <h3>Password</h3>
            <input
              type="password"
              pattern=".{6,}"
              placeholder="At least 6 characters"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
            <h5>
              <PriorityHighIcon fontSize="7" /> Passwords must be at least6 6
              characters.
            </h5>
          </div>
          <div>
            <span className="msg">
              By enrolling your mobile phone number, you consent to receive
              automated security notifications via text message from Amazon.
              Message and data rates may apply.
            </span>
          </div>
          <div className="Create">
            <button>Continue</button>
          </div>
          <div>
            <span className="msg">
              Already have an account?{" "}
              <span className="imp">
                <Link to="/user/signin">Sign in</Link>
              </span>
            </span>
            <span className="msg">
              Buying for work?{" "}
              <span className="imp">Create a free business account</span>
            </span>
          </div>
          <div>
            <span className="msg">
              By creating an account or logging in, you agree to Amazon’s
              <span className="imp">Conditions of Use</span>and{" "}
              <span className="imp">Privacy Policy</span>.
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAcc;

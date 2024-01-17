import React, { useContext, useState } from "react";
import amazon from "../Asset/amaz.png";
import "../Styles/CreateAcc.css";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
const Singin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { loginUser } = useContext(AuthContext);
  const [wrong, setWrong] = useState(false);
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    const data = { email, pass };
    await axios
      .post(`http://localhost:8080/user/signup`, data)
      .then((res) => {
        if (res.data.token) {
          loginUser(res.data.token);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.user);
          alert("login Successfull");
          navigate("/");
        } else {
          setWrong(true);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong");
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
        {wrong ? (
          <div className="warning__box">
            <div>
              <WarningAmberIcon
                style={{ color: "rgb(226, 66, 66)", fontSize: "40px" }}
              />
            </div>
            <div>
              <span>There was a problem</span>
              <span>Your password is incorrect</span>
            </div>
          </div>
        ) : null}

        <div className="account__form">
          <div>
            <h1 className="create__acc">Sign in</h1>
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
          </div>

          <div className="Create">
            <button>Continue</button>
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
      <div className="account__form_create">
        <span>New to Amazon</span>
        <Link to="/user/register">
          <div className="Createback">
            <button>Create your Amazon account</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Singin;

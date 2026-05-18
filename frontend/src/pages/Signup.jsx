import { useState } from "react";

import API from "../services/api";

import Navbar from "../components/Navbar";

function Signup() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const handleSignup = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/auth/signup",
        {
          name,
          email,
          password,
        }
      );

      alert("Signup Successful");

    } catch (error) {

      console.log(error);

      alert("Signup Failed");
    }
  };

  return (
    <div className="container">

      <Navbar />

      <h1>Signup</h1>

      <form onSubmit={handleSignup}>

        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Signup
        </button>

      </form>

    </div>
  );
}

export default Signup;
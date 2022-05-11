import React, {useState} from "react";

const User = (user) => {
  const [login, setLogin] = useState(true);

  const check = () => {
    user.setUser(!user.user)
    setLogin(true)
  }

  return (
    <form
      action=""
      className={user.user ? "user-form open-user-form" : "user-form"}
    >
      <i
        className="fas fa-times user-close"
        onClick={() => check()}
      ></i>
      <div className={login ? "user" : "user none"}>
        <div className="login">
          <h1>Login</h1>
          <input 
            placeholder="phone number" 
            type="tel" 
            className="email-box" 
            pattern="[0]{1}[0-9]{9}" required
          />
          <input 
            placeholder="Password" 
            type="password" 
            className="pass-box" 
          />
          <button>Log In</button>
        </div>
        <span onClick={() => setLogin(!login)}>Create New Account</span>
      </div>
      <div className={login ? "user none" : "user"}>
        <div className="sign-up">
          <h1>Sign Up</h1>
          <div className="text-box">
            <input placeholder="first name" type="text" />
            <input placeholder="surname" type="text" />
          </div>
          <input 
            placeholder="phone number" 
            type="tel" 
            className="email-box" 
            pattern="[0]{1}[0-9]{9}" required
          />
          <input
            placeholder="Password"
            type="password"
            className="pass-box"
          />
          <input
            placeholder="confirm Password"
            type="password"
            className="pass-box"
          />
          <button>Sign Up</button>
        </div>
        <span onClick={() => setLogin(!login)}>Log In</span>
      </div>
    </form>
  );
};

export default User;

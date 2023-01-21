import React, { useCallback, useState } from "react";
import style from "../public/css/login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);

  const handleEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [email]
  );

  const handlePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [password]
  );

  const handleViewPassword = useCallback(
    (e) => {
      e.preventDefault();
      setViewPassword((v) => !v);
    },
    [viewPassword]
  );

  return (
    <>
      <div className={style.container}>
        <div className={style["sign-in-container"]}>
          <form className={style.form}>
            <h1>Sign in</h1>
            <div className={style["social-container"]}>
              <a href="#" class="social">
                <i class="fab fa-facebook-f">1</i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-google-plus-g">2</i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-linkedin-in">3</i>
              </a>
            </div>
            <span>or use your account</span>

            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleEmail}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handlePassword}
              value={password}
            />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>

            {/* <input type="text" />

          <button onClick={handleViewPassword}>비밀번호 보이기</button>
          <button type="submit">로그인</button> */}
          </form>
        </div>
      </div>
    </>
  );
};

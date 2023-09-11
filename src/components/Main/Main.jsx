import Navbar from "./Navbar/Navbar";
import s from "./Main.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function Main(props) {
  let [auth, setAuth] = useState({
    id: null,
    login: null,
    email: null,
  });

  console.log(auth);
  useEffect(() => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        setAuth({
          id: response.data.data.id,
          login: response.data.data.login,
          email: response.data.data.email,
          fetching: true,
        });
      });
  }, []);

  return (
    <div className={s.main}>
      <Navbar {...auth} />
    </div>
  );
}
export default Main;

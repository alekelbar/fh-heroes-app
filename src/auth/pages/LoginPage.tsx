import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../heroes/context/AuthContext";
import { ButtonLogin } from "../components/ButtonLogin"

export const LoginPage = () => {

  const navigate = useNavigate();
  const { onLogin } = useContext(AuthContext);

  const Login = () => {
    onLogin();

    const lastpath = localStorage.getItem('lastpath') || '/marvel';

    navigate(lastpath, {
      replace: true
    })
  }

  return (
    <div className="container" style={{ margin: '20px' }}>
      <h1>Login Page</h1>
      <hr />
      <ButtonLogin onLogin={Login} text="Login" />
    </div>
  )
}

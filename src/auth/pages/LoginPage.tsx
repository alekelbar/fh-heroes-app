import { useNavigate } from "react-router-dom"
import { ButtonLogin } from "../components/ButtonLogin"

export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/marvel", {
      replace: true
    })
  }

  return (
    <div className="container" style={{ margin: '20px' }}>
      <h1>Login Page</h1>
      <hr />
      <ButtonLogin onLogin={onLogin} text="Login" />
    </div>
  )
}

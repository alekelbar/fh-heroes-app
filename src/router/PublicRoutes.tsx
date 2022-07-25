import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../heroes/context/AuthContext"
import { AuthState } from "../heroes/models";

type props = {
  children: JSX.Element
}

export const PublicRoutes = ({ children }: props) => {
  const { user: { _login } } = useContext(AuthContext);
  return (_login)
    ? <Navigate to={'/marvel'} />
    : children
}

import { useContext, useMemo } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../heroes/context/AuthContext"

type props = {
  children: JSX.Element
}

export const PrivateRoutes = ({ children }: props) => {
  const { user: { _login } } = useContext(AuthContext);

  const { pathname, search } = useLocation();
  const lastpath = useMemo(() => (pathname + search), [pathname, search]);
  localStorage.setItem('lastpath', lastpath);

  return (_login)
    ? children
    : <Navigate to={'/login'} />
}

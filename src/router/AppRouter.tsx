import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { HeroesRoutes } from "../heroes"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route
            path="/login"
            element={
              <PublicRoutes>
                <LoginPage />
              </PublicRoutes>
            }
          />

          <Route
            path="/*"
            element={
              <PrivateRoutes>
                <HeroesRoutes />
              </PrivateRoutes>
            } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

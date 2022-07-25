import { AppRouter } from './router';
import './css/index.css'
import { AuthProvider } from './heroes/context/AuthProvider';


export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  )
}

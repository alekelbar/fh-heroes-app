import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../heroes/context/AuthContext';
import './navbar.css'



export const Navbar = () => {
  const navigate = useNavigate();
  const { onLogout } = useContext(AuthContext)

  const Logout = () => {
    onLogout();
    navigate('/login', {
      replace: true,
    })
    localStorage.removeItem('user');
  }

  return (
    <nav className='navbar'>
      <div className="navbar__container">
        <div className="navbar__left">
          <span className="navbar__logo">comics</span>
        </div>
        <div className="navbar__right">
          <ul className="navbar__list">
            <NavLink
              to={'/marvel'}
              className={({ isActive }) => (isActive ? 'navbar__item navbar__item--active' : 'navbar__item')}
            >
              marvel
            </NavLink>

            <NavLink
              to={'/dc'}
              className={({ isActive }) => (isActive ? 'navbar__item navbar__item--active' : 'navbar__item')}
            >
              dc
            </NavLink>

            <NavLink
              to={'/search'}
              className={({ isActive }) => (isActive ? 'navbar__item navbar__item--active' : 'navbar__item')}
            >
              search
            </NavLink>

            <button
              onClick={Logout}
              className='navbar__item navbar__item--button'
            >
              logout
            </button>
          </ul>
        </div>
      </div>
    </nav >
  )
}

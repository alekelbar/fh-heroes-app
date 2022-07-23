import { NavLink, useNavigate } from 'react-router-dom'
import './navbar.css'



export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', {
      replace: true,
    })
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
              onClick={onLogout}
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

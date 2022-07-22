import { NavLink } from 'react-router-dom'
import './navbar.css'



export const Navbar = () => {
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
              to={'/login'}
              className={({ isActive }) => (isActive ? 'navbar__item navbar__item--active' : 'navbar__item')}
            >
              logout
            </NavLink>
          </ul>
        </div>
      </div>
    </nav >
  )
}

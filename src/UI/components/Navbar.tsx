import { NavLink } from 'react-router-dom'
import { spider } from './../../assets'


export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__container">
        <figure className='navbar__logo-container'>
          <img src={spider} className='navbar__logo'></img>
        </figure>
        <nav className='navbar__nav'>
          <ul className='navbar__list'>
            <NavLink
              to={'/marvel'}
              className={({ isActive }) => (isActive ? 'navbar__item navbar__item--active' : 'navbar__item')}
            >marvel</NavLink>

            <NavLink
              to={'/dc'}
              className={({ isActive }) => (isActive ? 'navbar__item navbar__item--active' : 'navbar__item')}
            > DC</NavLink>

            <NavLink
              to={'/Login'}
              className={({ isActive }) => (isActive ? 'navbar__item navbar__item--active' : 'navbar__item')}
            >Login</NavLink>
          </ul>
        </nav>
      </div>
    </div >
  )
}

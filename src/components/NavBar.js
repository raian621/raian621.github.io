import { Link } from "react-router-dom"

const NavBar = ({ pages }) => {
  return (
    <nav>
      {pages.map(page => (
        <div className="navbar-item">
          <Link
            key={page.path}
            to={page.path}
            className={`navbar-link current-${pages.isCurrent}`}
          >
            {page.name}
          </Link>
        </div>
      ))}
    </nav>
  )
}

export default NavBar;
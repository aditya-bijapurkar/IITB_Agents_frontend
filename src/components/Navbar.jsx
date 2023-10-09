import React from 'react'
import { Link, useMatch, useResolvedPath  } from 'react-router-dom';


function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Weather Application
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/creative-idea-component">Creativity</CustomLink>
        <CustomLink to="/snow">Snow</CustomLink>
      </ul>
    </nav>
  )
}

export default Navbar


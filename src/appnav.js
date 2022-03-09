import Nav from "react-bootstrap/Nav"
import { NavLink, Outlet } from "react-router-dom"

export const AppNav = () => {
  return (
    <>
      <Nav>
        <Nav.Link as={NavLink} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/registered">
          Registered
        </Nav.Link>
        <Nav.Link as={NavLink} to="/about">
          About
        </Nav.Link>
      </Nav>
      <Outlet />
    </>
  )
}

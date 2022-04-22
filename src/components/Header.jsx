import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'

export const Header = () => {
  return (
    <Navbar bg='dark' variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>Navbar</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/profile">
          <Nav.Link>アカウント設定</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/login">
          <Nav.Link>ログインする</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  )
}
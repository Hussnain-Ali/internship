import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Logo from '../../assets/logo.png'
import CartBtn from '../Cart/CartBtn'
const NavbarTop = () => {
    return (
        <>
            <Navbar bg='dark' variant='dark' sticky='top'>
                <Container>
                    <Navbar.Brand href='#home'>
                        <img src={Logo}
                            width="100"
                            height="100"
                            className="d-inline-block align-top" />
                    </Navbar.Brand >
                    <Nav className='me-auto '>
                        <Nav.Link href='#home'>
                            Home
                        </Nav.Link>
                        <CartBtn />
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarTop
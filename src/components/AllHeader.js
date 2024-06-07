import { Navbar, Nav } from "react-bootstrap"

export default function AllHeader() {
    return (
        <Nav>
            <Nav.Link href='/register'>Register</Nav.Link>
            <Nav.Link href='/Directlogin'>Login</Nav.Link>
            <Nav.Link href='/forgot'>Forgot Password</Nav.Link>
        </Nav>
    )
}


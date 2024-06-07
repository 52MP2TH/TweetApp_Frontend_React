import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap"
import { FaTwitterSquare } from "react-icons/fa";
import { useNavigate } from "react-router";
import AllHeader from "./AllHeader";
import "../styles/Header.css";

export default function Header(props) {

    let isRegistered = props.register;
    if (isRegistered) {
        return (
            <div className="Header">
                <Navbar bg="dark" variant="dark">.
                    <Navbar.Brand>
                        <FaTwitterSquare className='m-1' />
                        Tweet App
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <AllHeader />
                    </Nav>
                </Navbar>
            </div>
        )
    }
    return (
        <div className="Header">
            <Navbar bg="dark" variant="dark">.
                <Navbar.Brand>
                    <FaTwitterSquare className='m-1' />
                    Tweet App
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href='/'>Logout</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
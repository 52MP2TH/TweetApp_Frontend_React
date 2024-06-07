import { Navbar, Nav,Card,Container,Row ,Col} from "react-bootstrap"
import { FaTwitterSquare } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react"

export default function SuccessHeader(props) {
    let location = useLocation();
    let navigate = useNavigate();
    console.log(location)

    const handleViewTweet = () => {
        navigate('/viewtweets', { state: { userName: location.state.userName, userId: location.state.userId } })
    }

    const handlePostTweet = () => {
        navigate('/posttweets', { state: { userName: location.state.userName, userId: location.state.userId } })
    }

    const handleViewReplies = () => {
        navigate('/viewreplies', { state: { userName: location.state.userName, userId: location.state.userId } })

    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">.
                <Navbar.Brand>
                    <FaTwitterSquare className='m-1' />
                    Tweet App
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link onClick={handleViewTweet}>View & Reply to Tweets</Nav.Link>
                    <Nav.Link onClick={handlePostTweet}>Post Tweets</Nav.Link>
                    <Nav.Link onClick={handleViewReplies}>View Replies</Nav.Link>
                    <Nav.Link href='/'>Logout</Nav.Link>
                </Nav>
            </Navbar>
            {/*
            <Container>
                <Row>
                    <Col>
            <Card>
                <Card.Title>Hello</Card.Title>
            </Card>
            </Col>
            <Col>
            <Card>
                <Card.Title>Hello</Card.Title>
            </Card>
            </Col>
            </Row>
            </Container>*/}
            
        </div>
    )
}
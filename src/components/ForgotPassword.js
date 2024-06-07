import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react"
import { useNavigate } from "react-router";
import "../styles/ForgotPassword.css"

export default function ForgotPassword() {
    const [userid, setUserId] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})
    const navigate = useNavigate()

    const onSubmit = (data) => {
        data.preventDefault()
        userData.userid = userid
        userData.password = password
        console.log(userData)
        if (userid != "" && password != "") {
            fetch("http://localhost:8083/forgot", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData)
            })
            navigate('/directlogin')
        }
        else{
            alert ("Enter your credentials")
        }
    }

    return (
        <div>
            <Container>
                <h3 className="forgotHeader">Forgot your password?</h3>
                <Form>
                    <Form.Group>
                        <Form.Label id="userid">UserId</Form.Label>
                        <Form.Control type="text" aria-labelledby="userid" data-testid="userid" name="userid" placeholder="Enter your user id!" onChange={e => setUserId(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="password">Password</Form.Label>
                        <Form.Control type="password" aria-labelledby="password" data-testid="password" name="password" placeholder="Enter your password!" onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <div className="continueButton">
                        <Button aria-hidden="true" variant="success" onClick={onSubmit}>Continue</Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}
import { Container, Card, Table, Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle, Form } from "react-bootstrap";
import { useEffect, useState, React } from "react";
import { useNavigate,useLocation } from "react-router";

let replies = []
const ViewReplies = () => {

    let location = useLocation()
    let navigate = useNavigate()
    const [tweetReplies, setTweetReplies] = useState(replies);
    const [replyButton,setReplyButton] = useState(true)
    const handleClose = () => {
        setReplyButton(false)
        navigate('/success', { state: { userName: location.state.userName, userId: location.state.userId } })
    }

    function fetchUserReplies() {
        console.log(location.state)
        fetch('http://localhost:8083/getAllReplies')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                setTweetReplies(data)
            })
    }

    useEffect(() => {
        fetchUserReplies()
    }, []);


    return (
        <div>
            <Modal show={replyButton}>
                <ModalHeader>
                    <ModalTitle>Replies</ModalTitle>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </ModalHeader>
                <ModalBody>
                    <Table>
                        <thead>
                            <tr>
                                <th>TweetId</th>
                                <th>Reply</th>
                                <th>Time Published</th>
                            </tr>
                        </thead>
                        {
                            (tweetReplies.map((reply, index) =>
                                < tr >
                                    <td>{reply.tweetId}</td>
                                    <td>{reply.replyContent}</td>
                                    <td>{reply.replyPostTime}</td>
                                </tr>
                            ))
                        }

                    </Table>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ViewReplies
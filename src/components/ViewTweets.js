import { useEffect, useState } from "react";
import { Container, Card, Table, Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle, Form } from "react-bootstrap";
import SuccessHeader from "./SuccessHeader";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ViewTweets.css"

let tweets = []
export default function ViewTweets(props) {
    const [userTweets, setUserTweets] = useState(tweets);
    const [replyButton, setReplyButton] = useState(false)
    let [reply, setReply] = useState({})
    const [replyContent, setReplyContent] = useState('')
    const [tweetindex, setTweetIndex] = useState('')
    let location = useLocation()
    let navigate = useNavigate()
    const [disable, setDisable] = useState(false)
    const [value, setValue] = useState('Like')
    const handleClose = () => setReplyButton(false);

    function fetchUserTweets() {
        console.log(location.state)
        fetch('http://localhost:8083/allTweets')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                setUserTweets(data)
            })

    }

    function replyTweet(data) {
        setTweetIndex(data)
        setReplyButton(true)
    }

    function updateTweet(data) {
        console.log(data.username + " " + location.state.userName)
        if (data.username === location.state.userName)
            navigate('/updatetweet', { state: { tweet: data, userId: location.state.userId, userName: location.state.userName } })
        else
            alert('Sorry,You cannot update this tweet as you are not the user who tweeted this!!')
    }

    function deleteTweet(data) {
        console.log(data.username + " " + location.state.userName)
        if (data.username === location.state.userName)
            navigate('/deletetweet', { state: { tweet: data, userId: location.state.userId, userName: location.state.userName } })
        else
            alert('Sorry,You cannot delete this tweet as you are not the user who tweeted this!!')
    }

    function postReply() {
        console.log(replyContent)
        fetch("http://localhost:8083/replyTweet", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                tweetid: tweetindex,
                username: location.state.userName,
                tweetreply: replyContent
            })
        }).then(() => {
            alert('posted ur reply')
            setReplyButton(false)
            setReply({})
        })
    }


    // function handleLike(data) {
    //     console.log(data)
    //     setTweetIndex(data)
    //     fetch("http://localhost:8083/likeTweet/", {
    //         method: 'PUT',
    //         headers: {
    //             "Content-Type": "application/json"            },
    //         body: tweetindex
    //     }).then((response) => {
    //         const json = response.json()
    //         // console.log(response.status)
    //         if (response.status === 200) {
    //             setValue('Liked')
    //             setDisable(true)
    //             alert("Liked a tweet with " + data)
    //             navigate('/success', { state: { userId: location.state.userId, username: location.state.username } })
    //             setDisable(false)
    //         }
    //         else {
    //             alert('could not like your tweet, please try again!')
    //         }
    //     })
    // }

    useEffect(() => {
        fetchUserTweets()
    }, []);

    return (
        <div>
            <SuccessHeader />
            <div>
                <Container>
                    {userTweets.map(function (tweet, index) {
                        return (
                            <Card>
                                <Card.Body>
                                    <Card.Title>{tweet.username}</Card.Title>
                                    <Card.Text key={index}>{tweet.tweetContent}</Card.Text>
                                    <Button variant="outline-danger" onClick={(event) => replyTweet(tweet.tweetId)}>Reply</Button>{' '}
                                    <Button variant="outline-danger" onClick={(event) => updateTweet(tweet)}>Update</Button>{' '}
                                    <Button variant="outline-danger" onClick={(event) => deleteTweet(tweet)}>Delete</Button>{' '}

                                    {/* {tweet.like === 1 &&
                                        <Button className="like" variant="success" disabled>Liked</Button>}
                                    {tweet.like !== 1 &&
                                        <Button className="like" variant="outline-primary" onClick={(event) => handleLike(tweet.tweetId)} disabled={disable}>{value}</Button>
                                    } */}

                                </Card.Body>
                            </Card>
                        )
                    })}

                    <Modal show={replyButton}>
                        <ModalHeader>
                            <ModalTitle>Reply to the tweet</ModalTitle>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </ModalHeader>
                        <ModalBody>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className='p-2'>Enter Your Reply</Form.Label>
                                    <Form.Control className='p-2' type="text" name="newReply" placeholder="Enter reply" onChange={e => setReplyContent(e.target.value)}></Form.Control>
                                </Form.Group>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button type='submit' onClick={postReply}>Post Reply</Button>
                        </ModalFooter>
                    </Modal>

                </Container>
            </div>
        </div >
    )
}

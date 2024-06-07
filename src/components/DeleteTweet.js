import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap'
import {Navigate, useLocation, useNavigate} from 'react-router'
const DeleteTweet = () => {

    let location = useLocation()
    let navigate = useNavigate()
    let [index, setIndex] = useState()
    const [showDelete, setShowDelete] = useState(true)

    const handleClose = () => {
        setShowDelete(false)
    }

    function handleDelete() {
        setIndex(location.state.tweet.tweetId)
        fetch('http://localhost:8083/deleteTweet', {
            method: 'DELETE',
            body: index
        }).then((res) => {
            if (res.status == 200) {
                alert("Tweet deleted successfully")
                handleClose()
                navigate('/success',{state:{userId:location.state.userId,userName:location.state.userName}})
            }
            else {
                alert("couldn't delete the tweet, try again!!")
            }
        })
    }

    return (
        <div>
            <Modal show={showDelete}>
                <ModalHeader>
                    <ModalTitle>Delete Tweet</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <h3>Are you sure you want to delete this tweet?</h3>
                </ModalBody>
                <ModalFooter>
                    <Button variant="danger" onClick={handleDelete}>DELETE TWEET</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default DeleteTweet
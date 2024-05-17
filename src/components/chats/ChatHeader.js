import React from 'react'
import image from '../images/girl-icon.png'

function ChatHeader({ signedUser, setSignedUser, setLoggedOutUser }) {
    const handleLeaveChat = () => {
        const currentUser = signedUser.username
        setLoggedOutUser(currentUser)
        setSignedUser({})
    }

    return (
        <div className="align-items-start py-2 px-4 w-100 border-bottom border-info d-lg-block sticky-top bg-white">
            <div className="d-flex align-items-center py-1">
                <div className="position-relative">
                    <img
                        src={image}
                        alt="err"
                        className="rounded-circle mx-2"
                        width='40'
                        height='40'
                    />
                </div>
                <div className="flex-grow-1 chat-header">
                    <div>
                        <h2> CHIT CHAT </h2>
                        <strong> Logged in as {signedUser.username} </strong>
                    </div>
                    <button type='button' className='btn btn-secondary btn-sm btn-block' onClick={() => handleLeaveChat()}> Leave Chat </button>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader
import React from 'react'
import image from '../images/girl-icon.png'

function ChatHeader({signedUser}) {
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
                <div className="flex-grow-1">
                    <strong> Logged in as {signedUser.username} </strong>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader
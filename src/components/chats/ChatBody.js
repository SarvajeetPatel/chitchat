import React from 'react'
import image from '../images/girl-icon.png'

function ChatBody({ allMessages, signedUser, lastMessage, loggedOutUser }) {
    return (
        <div className='position-relative chat-height overflow-auto'>
            <div className='d-flex flex-column p-4'>
                {allMessages.map((messages, messageIndex) => {
                    return messages?.type === 'userStatus' ? (
                        <div className='text-center' key={messageIndex}>
                            <span className='badge bg-info'>
                                {messages?.userId === signedUser?.userId ? 'You have Joined!' : `${messages?.username} has joined!`}
                            </span>
                            <span className='badge bg-info'>
                                {loggedOutUser ? `${loggedOutUser} have left the conversation!` : null}
                            </span>
                        </div>
                    ) : (
                        <div key={messageIndex} className={messages?.userId === signedUser?.userId ? 'chat-message-right pb-4' : 'chat-message-left pb-4'}>
                            <div>
                                <img
                                    src={image}
                                    alt={messages?.username}
                                    title={messages?.username}
                                    width='40'
                                    height='40'
                                />
                                <div className='text-muted small text-nowrap mt-2'>
                                    12:00 AM
                                </div>
                            </div>
                            <div className='flex-shrink-1 bg-light rounded py-2 px-3 ml-3'>
                                <div className='font-weight-bold mb-1'>
                                    {messages?.userId === signedUser?.userId ? 'You' : messages?.username}
                                </div>
                                {messages.message}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div ref={lastMessage} />
        </div>
    )
}

export default ChatBody
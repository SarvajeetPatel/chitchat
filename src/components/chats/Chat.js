import React from 'react'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatContainer from './ChatContainer'
import ChatBody from './ChatBody'

function Chat({ signedUser, message, sendMessage, allMessages, setMessage }) {
    return (
        <ChatContainer>
            <ChatHeader signedUser={signedUser} />
            <ChatBody allMessages={allMessages} signedUser={signedUser} />
            <ChatInput sendMessage={sendMessage} message={message} setMessage={setMessage} />
        </ChatContainer>
    )
}

export default Chat
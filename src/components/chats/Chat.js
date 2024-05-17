import React from 'react'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatContainer from './ChatContainer'
import ChatBody from './ChatBody'

function Chat({ signedUser, message, sendMessage, allMessages, setMessage, lastMessage, setSignedUser, setLoggedOutUser, loggedOutUser }) {

    return (
        <ChatContainer>
            <ChatHeader signedUser={signedUser} setSignedUser={setSignedUser} setLoggedOutUser={setLoggedOutUser} />
            <ChatBody allMessages={allMessages} signedUser={signedUser} lastMessage={lastMessage} loggedOutUser={loggedOutUser} />
            <ChatInput sendMessage={sendMessage} message={message} setMessage={setMessage} />
        </ChatContainer>
    )
}

export default Chat
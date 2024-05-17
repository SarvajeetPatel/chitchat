import React, { useEffect, useRef, useState } from "react"
import LoginNewUser from "./LoginNewUser"
import Chat from "./chats/Chat"

function HomePage({ socket }) {
    const [newUser, setNewUser] = useState('')
    const [message, setMessage] = useState('')
    const [allMessages, setAllMessages] = useState([])
    const [signedUser, setSignedUser] = useState({})
    const lastMessage = useRef(null)
    const [loggedOutUser, setLoggedOutUser] = useState('')

    useEffect(() => {
        socket.on('users', (users) => {
            const curr_message = []
            for (const { userId, username } of users) {
                const newMessage = { type: 'userStatus', userId, username }
                curr_message.push(newMessage)
            }
            setAllMessages([...allMessages, ...curr_message])
        })

        socket.on('session', ({ userId, username }) => {
            setSignedUser({ userId, username })
        })

        socket.on('user connected', ({ userId, username }) => {
            const newMessage = { type: 'userStatus', userId, username }
            setAllMessages([...allMessages, newMessage])
        })

        socket.on('new message', ({ userId, username, message }) => {
            const newMessage = { type: 'message', userId: userId, username: username, message }
            setAllMessages([...allMessages, newMessage])
        })

    }, [socket, allMessages])

    useEffect(() => {
        lastMessage.current?.scrollIntoView({ behavior: 'smooth' });
    }, [allMessages])

    const logNewUser = () => {
        setSignedUser(newUser)
        socket.auth = { username: newUser }
        socket.connect()
    }

    const sendMessage = () => {
        socket.emit('new message', message)
        const newMessage = { type: 'message', userId: signedUser.userId, username: signedUser.username, message }
        setAllMessages([...allMessages, newMessage])
        setMessage('')
    }

    return (
        <>
            <main className="content">
                <div className="container mt-3">
                    {signedUser.userId && (
                        <Chat
                            lastMessage={lastMessage}
                            signedUser={signedUser}
                            message={message}
                            sendMessage={sendMessage}
                            allMessages={allMessages}
                            setMessage={setMessage}
                            setSignedUser={setSignedUser}
                            loggedOutUser={loggedOutUser}
                            setLoggedOutUser={setLoggedOutUser}
                        />
                    )}
                    {!signedUser.userId &&
                        <LoginNewUser
                            newUser={newUser}
                            setNewUser={setNewUser}
                            logNewUser={logNewUser} />
                    }
                </div>
            </main>
        </>
    );
}

export default HomePage;

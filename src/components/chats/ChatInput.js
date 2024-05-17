import React from 'react'

function ChatInput({ message, sendMessage, setMessage }) {
    return (
        <div className='mt-auto align-items-end border-info py-3 px-4 border-top d-lg-block chat-input'>
            <div className='input-group flex-fill'>
                <input
                    type='text'
                    className='form-control'
                    name='message'
                    value={message}
                    placeholder='Type your message...'
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => (e.key === 'Enter') ? sendMessage() : null}
                />
                {message &&
                    <button clasName='btn btn-info' onClick={() => sendMessage()}> SEND </button>}
            </div>
        </div>
    )
}

export default ChatInput
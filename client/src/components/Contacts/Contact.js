import React, { useEffect, useState } from 'react';
import './style.css';

const Contact = ({ conversation, currentUser, changeChat, onlineUser }) => {
    console.log(onlineUser);
    return (
        <div>
            <div
                className='conversation'
                onClick={() => changeChat(conversation?._id, currentUser?._id)}>
                <div className='img-container'>
                    <img
                        className='conversation-img'
                        src={'assets/noAvatar.png'}
                        alt='avatar'
                    />
                    {onlineUser && <div className='chat-online-badge'></div>}
                </div>
                <span className='conversation-name'>
                    {conversation?.userName}
                </span>
            </div>
        </div>
    );
};

export default Contact;

import React from 'react';
import './style.css';
import moment from 'moment';

const Message = ({ message, own }) => {
    return (
        <div className={own ? 'message own' : 'message'}>
            <div className='message-top'>
                <img
                    className='message-img'
                    src={'assets/noAvatar.png'}
                    alt=''
                />
                <p className='message-text'>{message.text}</p>
            </div>
            <div className='message-bottom'>
                {moment(message.createdAt).fromNow()}
            </div>
        </div>
    );
};

export default Message;

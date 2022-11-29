import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDispatch } from '../../features';
import Contact from '../Contacts/Contact';
import { io } from 'socket.io-client';
// import Message from '../Message/Message';

const Chat = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const contactStore = useSelector((state) => state?.user?.users);
    const [currentUser, setCurrentUser] = useState(null);
    const user = localStorage.getItem('user');
    const socket = useRef();
    const [chats, setChats] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [sendMessage, setSendMessage] = useState(null);
    const [receivedMessage, setReceivedMessage] = useState(null);

    // Connect to Socket.io
    useEffect(() => {
        socket.current = io('ws://localhost:8900');
        contactStore.map((contact) => {
            socket.current.emit('new-user-add', contact?._id);
        });
        socket.current.on('get-users', (users) => {
            setOnlineUsers(users);
        });
    }, [user]);

    // Send Message to socket server
    useEffect(() => {
        if (sendMessage !== null) {
            socket.current.emit('send-message', sendMessage);
        }
    }, [sendMessage]);

    // Get the message from socket server
    useEffect(() => {
        socket.current.on('recieve-message', (data) => {
            setReceivedMessage(data);
        });
    }, []);

    const checkOnlineStatus = (chat) => {
        const online = onlineUsers.find((user) => user?.userId === chat?._id);

        return online ? true : false;
    };

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/chat');
        } else {
            setCurrentUser(JSON.parse(localStorage.getItem('user'))[0]);
        }
    }, [navigate]);

    useEffect(() => {
        if (currentUser?.role !== 'Doctor') {
            dispatch(getUserDispatch({ role: 'Doctor' }));
        } else {
            dispatch(getUserDispatch({ role: 'Patient' }));
        }
    }, [currentUser?.role, dispatch]);

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('user');
        navigate('/');
    };

    const handleCurrentChat = (contactUserId, currentUserId) => {
        setCurrentChat({ receiverId: contactUserId, senderId: currentUserId });
    };
    // useEffect(() => {
    //     setOnlineUser(
    //         contactStore.filter((value) => onlineUsers.includes(value?._id))
    //     );
    // }, [onlineUsers]);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const message = {
    //         sender: user?._id,
    //         text: newMessage,
    //         conversationId: currentChat._id
    //     };

    //     const receiverId = currentChat.members.find(
    //         (member) => member !== user?._id
    //     );

    //     socket.current.emit('sendMessage', {
    //         senderId: user?._id,
    //         receiverId,
    //         text: newMessage
    //     });

    // try {
    //     const res = await axios.post('/messages', message);
    //     setMessages([...messages, res.data]);
    //     setNewMessage('');
    // } catch (err) {
    //     console.log(err);
    // }
    // };

    // useEffect(() => {
    //     scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    // }, [messages]);

    return (
        <>
            <div className='chat-main'>
                <div className='chat-outer'>
                    <div className='chat-inner'>
                        <div className='messenger '>
                            <div className='chat-menu'>
                                <button onClick={(e) => handleLogout(e)}>
                                    Logout
                                </button>
                                <div className='chat-menu-wrapper'>
                                    <h3>Contact</h3>
                                    {contactStore &&
                                        contactStore.map((contact) => (
                                            // <div onClick={() => setCurrentChat(c)}>
                                            <Contact
                                                conversation={contact}
                                                currentUser={currentUser}
                                                changeChat={handleCurrentChat}
                                                key={contact?._id}
                                                onlineUser={checkOnlineStatus(
                                                    contact
                                                )}
                                            />
                                            // </div>
                                        ))}
                                </div>
                            </div>
                            <div className='chat-box'>
                                <div className='chat-box-wrapper'>
                                    {
                                        currentChat && (
                                            <>
                                                <h1>hiiiiii</h1>
                                                {/* <div className='chat-box-top'>
                                                {messages.map((message) => (
                                                    <div ref={scrollRef}>
                                                        <Message
                                                            message={message}
                                                            own={
                                                                message.senderId ===
                                                                user._id
                                                            }
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className='chat-box-bottom'>
                                                <textarea
                                                    className='chat-message-input'
                                                    placeholder='write something...'
                                                    onChange={(e) =>
                                                        setNewMessage(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={
                                                        newMessage
                                                    }></textarea>
                                                <button
                                                    className='chat-submit-button'
                                                    onClick={handleSubmit}>
                                                    Send
                                                </button>
                                            </div> */}
                                            </>
                                        )
                                        //  : (
                                        //     <span className='no-conversation-text'>
                                        //         Welcome {currentUser?.userName}
                                        //         <br />
                                        //         Open a conversation to start a chat.
                                        //     </span>
                                        // )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chat;

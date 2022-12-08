import ChatItem from "./chat-item";
import {Link} from "react-router-dom";
import * as messagesService from "../../services/messages-service"
import {useEffect} from "react";
import * as authService from "../../services/auth-service";
import * as groupService from "../../services/groups-service";

const ChatList = (
    {
        chats = [],
        group = {},
        currentUser = {}
    }
) => {

    function sendMessage() {
        const content = document.getElementById('messageInput').value;
        var message = {
            "content": content,
            "group": group._id,
            "sentBy": currentUser._id,
            "sentOn": new Date()
        }
        messagesService.userMessageGroup(currentUser._id, group._id, message);
        window.location.reload();
    }
    window.scrollTo(0, document.body.scrollHeight);

    return (
        <>
            <ul className={'list-group w-75 d-grid gap-2 ps-3'}>
                {
                    chats.map && chats.map(
                        message =>
                            <ChatItem key={message._id} message={message} group={group}/>)
                }
            </ul>

            <div className="w-75 mb-3 gap-2 ps-3">
                <br/>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Compose message</label>
                <textarea className="form-control mb-1" id="messageInput" rows="3"></textarea>
                <button className='btn btn-primary float-end' onClick={sendMessage}>Send</button>
            </div>
        </>
    )
}

export default ChatList

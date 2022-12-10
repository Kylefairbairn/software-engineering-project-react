import * as userService from "../../services/users-service";
import {useEffect, useState} from "react";
import * as authService from "../../services/auth-service";
import * as groupService from "../../services/groups-service";
import {useNavigate} from "react-router-dom";
import * as messagesService from "../../services/messages-service";

const ChatItem = ({message}) => {

    const navigate = useNavigate()
    const uid = message.sentBy;
    const [sender, setSender] = useState({})
    const d = message.sentOn.toString()
    const date = new Date(d);
    const mid = message._id;
    const [currentUser, setCurrentUser] = useState({})

    const findUserById = async () =>
        userService.findUserById(uid)
            .then((user) => setSender(user))

    useEffect(() => {
        async function fetchLoggedInUser() {
            try {
                const currentUser = await authService.profile()
                setCurrentUser(currentUser)
            } catch (e) {
                navigate('/')
            }
        }
        fetchLoggedInUser()
        findUserById()
    }, [uid])

    function deleteMessage() {
        messagesService.userDeleteMessage(mid);
        window.location.reload();
    }

    function updateMessage() {
        document.getElementById(message._id).setAttribute("contentEditable", "false");
        var text = document.getElementById(message._id).innerHTML;
        message.content = text;
        messagesService.userEditMessage(mid, message);
        window.location.reload();
    }

    function editMessage() {
        document.getElementById(message._id).setAttribute("contentEditable", "true");
        document.getElementById(message._id).nextElementSibling.removeAttribute("hidden");
    }

    window.scrollTo(0, document.body.scrollHeight);

    return (

        <li className='list-group-item'>
            <div className="row">
                <div className="col-3">
                    <h5 className="mb-1">@{sender.username}</h5>
                </div>
                <div className="col-6">
                    <small>{date.toLocaleString()}</small>
                </div>
                <div className="col-3">
                    {
                        currentUser._id === uid &&
                        <div id="adminButtons" className="float-end" role="group" aria-label="Large button group">
                            <a href="javascript:void(0);" onClick={editMessage} className="pe-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-pen" viewBox="0 0 16 16"><path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                                </svg>
                            </a>
                            <button type="button" className="btn-close" aria-label="Close" onClick={deleteMessage}></button>
                        </div>
                    }
                </div>
            </div>

            <br/>
            <p id={message._id} contentEditable="false" className="mb-1">{message.content}</p>
            <button className="btn btn-primary float-end" onClick={updateMessage} hidden>Update</button>

        </li>

    )
}
export default ChatItem

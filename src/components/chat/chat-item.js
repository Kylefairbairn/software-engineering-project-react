import * as userService from "../../services/users-service";
import {useEffect, useState} from "react";

const ChatItem = ({message}) => {

    const uid = message.sentBy;
    const [sender, setSender] = useState({})
    const d = message.sentOn.toString()
    const date = new Date(d);

    const findUserById = async () =>
        userService.findUserById(uid)
            .then((user) => setSender(user))

    useEffect(() => {
        findUserById()
    }, [uid])

    return (

        <li className='list-group-item'>
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">@{sender.username}</h5>
                <small>{date.toLocaleString()}</small>

                <div className="btn-group btn-group-lg" role="group" aria-label="Large button group">
                    <a href="" className="pe-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-pen" viewBox="0 0 16 16"><path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                        </svg>
                    </a>
                    <button type="button" className="btn-close" aria-label="Close"></button>
                </div>


            </div>
            <br/>
            <p className="mb-1">{message.content}</p>

            {/*{*/}
            {/*    currentUser._id === uid && */}
            {/*    <div>*/}
            {/*        some html*/}
            {/*    </div>*/}
            {/*}*/}

            {/*<p>{currentUser}</p>*/}




            {/*1. add authservice code*/}
            {/*2. verify logged in user and check if it is their message*/}
            {/*3. check if they are admin and show/hide buttons accordingly*/}
            {/*4. connect send message button to messages service, create message {}*/}
            {/*5. reload after send*/}

        </li>

    )
}
export default ChatItem

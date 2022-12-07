import * as userService from "../../services/users-service";
import {useEffect, useState} from "react";

const ChatItem = ({message}) => {

    const uid = message.sentBy;
    const [user, setUser] = useState({})
    const d = message.sentOn.toString()
    const date = new Date(d);

    const findUserById = async () =>
        userService.findUserById(uid)
            .then((user) => setUser(user))

    useEffect(() => {
        findUserById()
    }, [uid])

    return (
        <li className={'list-group-item'}>
            <div className={'fst-italic'}>
                <div className={'text-start'}>
                    {user.username}
                </div>
                <div className={'text-end'}>
                    {date.toUTCString()}
                </div>
            </div>
            <br/>
            {message.content}
        </li>
    )
}
export default ChatItem

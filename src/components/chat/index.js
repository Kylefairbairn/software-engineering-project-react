import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import * as groupService from "../../services/groups-service"
import ChatList from "./chat-list";

const Chat = () => {
    const path = useLocation().pathname.split("/")
    const gid = path[3]
    const [group, setGroup] = useState({})

    const findGroupByGroupId = () =>
        groupService.findGroupByGroupId(gid)
            .then((group) => setGroup(group))
    useEffect(findGroupByGroupId, [])
    return(
        <div className={'border border-light rounded-3 bg-success'}>
            <div className={'row ps-1'}>
                <h4 className={'pt-1'}>
                    {group.groupName}
                </h4>
            </div>
            <div className={'row'}>
                <ChatList/>
            </div>
        </div>
    )
}
export default Chat
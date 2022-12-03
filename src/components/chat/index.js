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

    const userLeavesGroup = () => {

    }
    useEffect(findGroupByGroupId, [])
    return(
        <div className={'rounded-3 bg-light p-2'}>
            <div className={'row ps-2'}>
                <div className={'col p-2'}>
                    <h4 className={'pt-1'}>
                        {group.groupName}
                    </h4>
                    <p>
                        {group.description}
                    </p>
                </div>
                <div className={'col p-2'}>
                    <div className={'row pe-2'}>
                        <div className='col-8 p-0'>
                            <i className='fa-solid fa-gear fs-3 pt-1 pe-2 float-end text-secondary'></i>
                        </div>
                        <div className='col ps-0'>
                            <button className='btn btn-danger float-end'>
                                Leave
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'row'}>
                <ChatList/>
            </div>
        </div>
    )
}
export default Chat
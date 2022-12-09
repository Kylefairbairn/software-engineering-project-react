import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import * as groupService from "../../services/groups-service"
import * as authService from "../../services/auth-service"
import ChatList from "./chat-list";

const Chat = () => {
    const navigate = useNavigate()
    const path = useLocation().pathname.split("/")
    const gid = path[3]
    const [group, setGroup] = useState({})
    const [profile, setProfile] = useState({})

    const userLeavesGroup = async () => {
        const memberIndex = group.members.indexOf(profile._id)
        const adminIndex = group.admin.indexOf(profile._id)

        if (memberIndex > -1) {
            group.members.splice(memberIndex, 1)
        }
        if (adminIndex > -1) {
            group.admin.splice(adminIndex, 1)
        }
        await groupService.updateGroup(gid, group)
        navigate('/messages')
    }

    const userEditsGroup = async () => {


        if (group.admin.includes(profile._id)) {
            navigate(`/messages/chat/${group._id}/edit`)
        } else {
            alert('You cannot edit a group unless you are an admin for that group')
        }
    }

    useEffect(() => {
        async function fetchData() {
            const currentUser = await authService.profile()
            setProfile(currentUser)
            const groupData =  await groupService.findGroupByGroupId(gid)
            setGroup(groupData)
        }
        fetchData()
    }, [])
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
                            <button className='btn btn-primary float-end' onClick={userEditsGroup}>
                                Edit
                            </button>

                        </div>
                        <div className='col ps-0'>
                            <button className='btn btn-danger float-end'
                                    onClick={userLeavesGroup}>
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
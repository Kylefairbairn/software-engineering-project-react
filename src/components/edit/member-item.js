import {useEffect, useState} from "react";
import * as userService from "../../services/users-service";
import * as groupService from "../../services/groups-service";

const MemberItem = (
    {
      uid, group
    }
) => {

    const [member, setMember] = useState({})

    const removeUserFromGroup = async () => {
        if (group.admin.includes(member._id)) {
            alert("You cannot remove an admin from the group")
        } else {

            const memberIndex = group.members.indexOf(uid)
            if (memberIndex > -1) {
                group.members.splice(memberIndex, 1)
            }
            await groupService.updateGroup(group._id, group)
        }
    }

    useEffect(() => {
        async function fetchData(){
            try {
                const user = await userService.findUserById(uid)
                setMember(user)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [])
    return(
        <li className={'list-group-item'}>
                <div className={'row'}>
                    <div className={'col'}>
                    <span className={'float-left'}>
                        <b>{member.username}</b>
                        <span className={'float-end'}>
                            <button className='btn btn-danger float-end' onClick={removeUserFromGroup}>Remove User</button>
                        </span>
                    </span>
                    </div>
                </div>
        </li>
    )
}

export default MemberItem
import {useEffect, useState} from "react";
import * as userService from "../../services/users-service";

const MemberItem = (
    {
      uid, group
    }
) => {
    const [member, setMember] = useState({})

    const removeUserFromGroup = async () => {
    console.log("remove the user")
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
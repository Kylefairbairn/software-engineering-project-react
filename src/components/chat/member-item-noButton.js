import {useEffect, useState} from "react";
import * as userService from "../../services/users-service";

const MemberItemNoButton = (
    {
        uid, group
    }
) => {

    const [member, setMember] = useState({})


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
                    </span>
                </div>
            </div>
        </li>
    )
}

export default MemberItemNoButton
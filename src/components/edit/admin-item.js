import {useEffect, useState} from "react";
import * as userService from "../../services/users-service";

const AdminItem = (
    {
        uid, group
    }
) => {
    const [admin, setAdmin] = useState({})

    useEffect(() => {
        async function fetchData(){
            try {
                const user = await userService.findUserById(uid)
                setAdmin(user)
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
                        <b>{admin.username}</b>

                    </span>
                </div>
            </div>
        </li>
    )
}
export default AdminItem
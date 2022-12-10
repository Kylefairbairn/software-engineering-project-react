import React, {useEffect, useState} from "react";
import * as groupService from "../../services/groups-service";
import * as usersService from "../../services/users-service";
import * as authService from "../../services/auth-service"
import GroupsList from "./group-list";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

const Groups = () => {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState({})
    const [groups, setGroups] = useState([])
    const [otherUser, setOtherUser] = useState({})
    const [username, setUsername] = useState('')

    const findGroups = () =>
        groupService.findGroupsForUser(currentUser._id)
            .then(groups => setGroups(groups))

    const findCommonGroups = async (ouid) =>
        await groupService.findAllCommonGroups(currentUser._id, ouid)
            .then(groups => setGroups(groups))

    const findUserByUsername = async (name) =>
        await usersService.findUserByUsername(name)
            .then(user => setOtherUser(user))
            .catch(e => alert(e))

    const searchHandler = async () => {
        if (!username) {
            return await findGroups()
        } else {
            await findUserByUsername(username)
            return await findCommonGroups(otherUser._id)
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const profile = await authService.profile()
                setCurrentUser(profile)
                const currentGroups = await groupService.findGroupsForUser(profile._id)
                setGroups(currentGroups)
            } catch (e) {
                navigate('/login')
            }
        }
        fetchData()
    }, [])
    return(
        <div className={'pt-2'}>
            <div className={'ps-2 row'}>
                <div className={'col'}>
                    <Link to={'/messages/create'}>
                        <button className={'btn btn-primary'}>
                            Create Group
                        </button>
                    </Link>
                </div>
                <div className={'col'}>
                    <div className="input-group">
                        <input id={'search-bar'} type="text" className="form-control" placeholder="Recipient's username"
                               aria-label="Recipient's username" aria-describedby="basic-addon2"
                               onChange={(e) => setUsername(e.target.value)}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary"
                                    type="button" onClick={searchHandler}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'pt-2'}>
                <GroupsList groups={groups}/>
            </div>
        </div>
    );
}
export default Groups
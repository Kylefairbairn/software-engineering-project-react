import React, {useEffect, useState} from "react";
import * as groupService from "../../services/groups-service";
import * as usersService from "../../services/users-service";
import GroupsList from "./group-list";
import {Link} from "react-router-dom";

const Groups = () => {
    const [groups, setGroups] = useState([])
    const [user, setUser] = useState()
    const [username, setUsername] = useState('')

    const findGroups = () =>
        groupService.findGroupsForUser('633c41de89045f21193ea004')
            .then(groups => setGroups(groups))

    const findCommonGroups = async (ouid) =>
        await groupService.findAllCommonGroups('633c41de89045f21193ea004', ouid)
            .then(groups => setGroups(groups))

    const findUserByUsername = async (name) =>
        await usersService.findUserByUsername(name)
            .then(user => setUser(user))
            .catch(e => alert(e))

    const searchHandler = async () => {
        if (username === '' || username === undefined) {
            return await findGroups()
        } else {
            await findUserByUsername(username)
            return await findCommonGroups(user._id)
        }
    }

    useEffect(findGroups, [])
    return(
        <div className={'pt-2'}>
            <div className={'ps-2 row'}>
                <div className={'col'}>
                    {/*TODO Add create group functionality*/}
                    <Link to={"/messages/create"}>
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
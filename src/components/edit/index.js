import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import * as groupService from "../../services/groups-service"
import MemberList from "./member-list";


const EditGroup = () => {

    const path = useLocation().pathname.split("/")
    const gid = path[3]
    const [group, setGroup] = useState({})

    const findGroupByGroupId = () =>
        groupService.findGroupByGroupId(gid)
            .then((group) => setGroup(group))

    const [groupMembers, setGroupMembers] = useState([])
    const [admins, setAdmins] = useState([])
    const [userNameError, setUserNameErrors] = useState(false)
    const [dateError, setDateErrors] = useState(false)
    const [adminError, setAdminErrors] = useState(false)
    const [groupNameError, setGroupNameErrors] = useState(false)


    const editDescription = () => {
        //currentDescription.split()
    }

    const currentMembers = group.members


    useEffect(findGroupByGroupId, [])
    return(
        <div>
        <h1>
            Current Name: {group.groupName}
        </h1>
            <h2>
                Admins:
            </h2>
            <h2>
                Members:
            </h2>
            <MemberList key={gid} group={gid} memberList={group.members}/>

            <h2>
               Group Description: {group.description}
            </h2>
            <h2>

            </h2>
            <h2>
            </h2>
        </div>

    );
};
export default EditGroup;
import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import * as groupService from "../../services/groups-service"
import MemberList from "./member-list";
import AdminList from "./admin-list";
import EditGroupNameAndDescription from "./edit-group-name-and-description";


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



    useEffect(findGroupByGroupId, [])
    return(
        <div>
            <EditGroupNameAndDescription key={0} gid={gid} group={group}
                                         groupName={group.groupName} groupDescription={group.description}/>
            <h2>
                Admins:
            </h2>
            <AdminList key={1} group={gid} adminList={group.admin}/>
            <h2>
                Members:
            </h2>
            <MemberList key={2} group={group} memberList={group.members}/>
        </div>

    );
};
export default EditGroup;
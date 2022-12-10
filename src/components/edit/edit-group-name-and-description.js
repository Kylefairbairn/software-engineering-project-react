import React, {useEffect, useState} from "react";
import * as groupService from "../../services/groups-service"
import {updateGroup} from "../../services/groups-service";


// on change -> use state -> once user clicks save/enter -> send object
const EditGroupNameAndDescription = (
    {gid, group, groupName, groupDescription}
) => {

    const [currentGroupName, setCurrentGroupName] = useState('');
    const [currentGroupDesc, setCurrentGroupDesc] = useState('');

    const handleChangeGroupName = event => {
        setCurrentGroupName(event.target.value)
    }

    const handleChangeGroupDescription = event => {
        setCurrentGroupDesc(event.target.value)
    }

    const updateGroupNameAndDescription = () => {
        const updatedGroup = {
            ...group,
            groupName: currentGroupName,
            description: currentGroupDesc
        }
        updateGroup(gid, updatedGroup)
    }

    return (
        <div>
            <div>
                <h1>Current Name:
                    <input
                        type='text'
                        id='groupName'
                        name='groupName'
                        placeholder={groupName}
                        onChange={handleChangeGroupName}
                        value={currentGroupName} />
                </h1>
            </div>
            <div>
                <h2>Current Description:
                    <input
                        type='text'
                        id='groupDescription'
                        name='groupDescription'
                        placeholder={groupDescription}
                        onChange={handleChangeGroupDescription}
                        value={currentGroupDesc}/>
                </h2>
            </div>
            <button className='btn btn-primary float-center' onClick={updateGroupNameAndDescription}>
                Save
            </button>
        </div>
    )

};

export default EditGroupNameAndDescription;
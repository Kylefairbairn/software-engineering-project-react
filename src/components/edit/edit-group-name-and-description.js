import React, {useEffect, useState} from "react";
// on change -> use state -> once user clicks save/enter -> send object
const EditGroupNameAndDescription = (
    {groupName, groupDescription}
) => {


    const handleChange = event => {
        console.log('text box changed')
        // event.persist();
        //
        // let value = event.target.description;
        //
        // this.setState(prevState => ({
        //     item: { ...prevState.item, [event.target.description]: value}
        // }))
    }

    return (
        <div>
            <div>
                <h1>Current Name:
                    <input type='text' value={groupName} onChange={handleChange}/>
                </h1>
            </div>
            <h2>Current Description:
                <input
                    type='text'
                    name='description'
                    placeholder={groupDescription}
                    value={groupDescription}
                    onChange={handleChange}/>
            </h2>
        </div>
    )

};

export default EditGroupNameAndDescription;
import React, {useState} from "react";
import {Form} from "react-bootstrap";
import userEvent from "@testing-library/user-event";
const CreateGroup = () => {
    // need to create const to create form objects
    // form validation
        // creating multiple select for members and admin
    // error handling
    // probably need service from gino to create group
        // from form object ?
    // feedback that group has been created
    // <label htmlFor="membersList">Members</label>
    // <input type="text" className="form-control" id="membersList" placeholder="Members"/>

    const currentForm = {
        formMembers: '',
        formDate: '',
        admin: "",
        groupName: "",
        description: ''
    }

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const [groupCreator, setGroupCreator] = useState({})
    const [members, setMembers] = useState({})
    const [admin, setAdmins] = useState({})




    const handleAddMembers = (e) => {
        // probably going to have to find the user e
        // make a new user object

        const newMembers = {e}

        setMembers([...groupCreator,newMembers])

        //setMembers((e) => ({...e, members}))

        //console.log(members)

    }

    console.log(groupCreator)

    //id="membersList" placeholder="ex. kyle fairbairn "/>

    return(
        <Form>
            <div className="form-group">
                <label>Members</label>
                <input className="form-control"
                    onChange={e=> setGroupCreator(e.target.value)} />

            </div>

            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="Date" className="form-control" id="date" placeholder="date"/>
            </div>

            <div className="form-group">
                <label htmlFor="admin">Admin</label>
                <input type="text" className="form-control" id="Admin" placeholder="admin"/>
            </div>

            <div className="form-group">
                <label htmlFor="groupName">Group Name</label>
                <input type="text" className="form-control" id="groupName" placeholder="Group name"/>
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" rows="3"></textarea>
            </div>

            <div className = 'mb-4 mt-2 text-center'>
                <button type="button" className=" btn btn-primary btn-lg active me-2 ">Create Group </button>
                <button type="button" className=" btn btn-primary btn-lg active me-2 " onClick={handleAddMembers}>Add Member</button>
                <button type="button" className=" btn btn-primary btn-lg active">Add Admin</button>
            </div>


        </Form>
        // <div>
        //     <h1>Create a group</h1>
        //     <h3>Members</h3>
        //     <input className="mb-2 form-control"/>
        //     <h3>Date</h3>
        //     <input className="mb-2 form-control"/>
        //     <h3>Admins</h3>
        //     <input className="mb-2 form-control"/>
        //     <h3>Group Name</h3>
        //     <input className="mb-2 form-control"/>
        //     <h3>Group Description</h3>
        //     <input className="mb-2 form-control"/>
        //
        // </div>
    );
};
export default CreateGroup;
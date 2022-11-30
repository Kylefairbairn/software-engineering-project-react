import React, {useState} from "react";
import {Form, FormControl} from "react-bootstrap";

const CreateGroup = () => {

    // error handling
    // lists for admin and members
    // connection to group service


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
    }

    const handleCreateGroup = () => {
        console.log(form)
    }

    const setField = (field, value) => {
        setForm({...form, [field]: value})

        if(!!errors[field])
            setErrors({...errors,[field]:null})
    }

    return(
        <Form>

            <div className="form-group">
                <label htmlFor="membersList">Members</label>
                <input
                    type="text"
                    className="form-control"
                    id="membersList"
                    placeholder="Members"
                    value = {form.id}
                    onChange={(e) => setField("membersList", e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                    type="Date"
                    className="form-control"
                    id="date"
                    placeholder="date"
                    onChange={(e) => setField("date", e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="admin">Admin</label>
                <input
                    type="text"
                    className="form-control"
                    id="Admin"
                    placeholder="admin"
                    onChange={(e) => setField("Admin", e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="groupName">Group Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="groupName"
                    placeholder="Group name"
                    onChange={(e) => setField("groupName", e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    className="form-control"
                    id = "Description"
                    placeholder= "Ex CS5500 study group"
                    onChange={(e) => setField("Description", e.target.value)}
                    rows="3">
                </textarea>
            </div>

            <div className = 'mb-4 mt-2 text-center'>
                <button
                    type="button"
                    className=" btn btn-primary btn-lg active me-2 "
                    onClick={handleCreateGroup}
                >Create Group
                </button>

                <button
                    type="button"
                    className=" btn btn-primary btn-lg active me-2 "
                    onClick={handleAddMembers}
                >Add Member
                </button>

                <button type="button" className=" btn btn-primary btn-lg active">Add Admin</button>
            </div>


        </Form>

    );
};
export default CreateGroup;
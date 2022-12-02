import React, {useState} from "react";
import {Form, FormControl} from "react-bootstrap";


const CreateGroup = () => {

    // error handling
        // if things are empty
    // lists for admin and members
        // maybe try to onchange inside members have a function that add memmbers
        // instead of lamba function inside of the onChange
    // connection to group service
        // user id is needed but pretty sure group object is complete

    // members are usernames to ensure uniqueness

    const [form, setForm] = useState({
        username: '', formDate: '', formAdmin: '', formGroupName: '', formDescription: ''
    })
    const [members, setMembers] = useState([])

    const [admins, setAdmins] = useState([])


    const [errors, setErrors] = useState({
    })


    const handleAddMembers = (e) => {

        e.preventDefault();

        const newMember = {...form}

        setMembers([...members,newMember])


    }

    const handleAddAdmin = (e) => {
        e.preventDefault()

        const newAdmin = {...form}

        setAdmins([...admins, newAdmin])


    }

    const handleCreateGroup = () => {
        console.log(form)

        // if none of the elements are empty and the username is found within the database
        // get users id from user serivce and then create the group object
    }


    return(
        <Form>

            <div className="form-group">
                <label htmlFor="membersList">Members User Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="membersList"
                    placeholder="Members"
                    //onChange={setFormMembers}
                    value = {form.username}
                    onChange={(e) => setForm({...form, username: e.target.value})}
                />
            </div>

            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                    type="Date"
                    className="form-control"
                    id="date"
                    placeholder="date"
                    onChange = {(e) => setForm({...form, formDate: e.target.value})}
                />
            </div>

            <div className="form-group">
                <label htmlFor="admin">Admins User Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="Admin"
                    placeholder="admin"
                    onChange = {(e) => setForm({...form, formAdmin: e.target.value})}
                />
            </div>

            <div className="form-group">
                <label htmlFor="groupName">Group Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="groupName"
                    placeholder="Group name"
                    onChange = {(e) => setForm({...form, formGroupName: e.target.value})}
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    className="form-control"
                    id = "Description"
                    placeholder= "Ex CS5500 study group"
                    onChange = {(e) => setForm({...form, formDescription: e.target.value})}
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

                <button type="button"
                        className=" btn btn-primary btn-lg active"
                        onClick={handleAddAdmin}
                >Add Admin</button>
            </div>
            <pre>
                {/*{JSON.stringify(form, null, 2)}*/}
            </pre>
            <pre>
                {JSON.stringify(admins, null, 2)}
                {/*{JSON.stringify(members, null, 2)}*/}
            </pre>

        </Form>

    );
};
export default CreateGroup;
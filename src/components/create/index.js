import React, {useState} from "react";
import {Form, FormControl} from "react-bootstrap";

const CreateGroup = () => {

    // error handling
        // if things are empty
    // lists for admin and members
        // figure out how to use lists without writing over
    // connection to group service
        // user id is needed but pretty sure group object is complete


    const [form, setForm] = useState({
        formMembers: [], formDate: '', formAdmin: '', formGroupName: '', formDescription: ''
    })
    //const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const [groupCreator, setGroupCreator] = useState({})
    const [members, setMembers] = useState({})
    const [admin, setAdmins] = useState({})




    const handleAddMembers = (e) => {
        const newMembers = e.target.value

        console.log(newMembers)
        //form.formMembers = form.formMembers.push(newMembers)

        const newForm = {

            formMembers: form.formMembers,
            formDate: form.formDate,
            formAdmin: form.formAdmin,
            formGroupName: form.formGroupName,
            formDescription: form.formDescription
        }

        setForm(newForm)

    }

    const handleCreateGroup = () => {
        console.log(form)
    }


    const setFormMembers = (e) => {
        const newMembers = e.target.value

        const newForm = {

            formMembers: newMembers,
            formDate: form.formDate,
            formAdmin: form.formAdmin,
            formGroupName: form.formGroupName,
            formDescription: form.formDescription
        }

        setForm(newForm)
    }

    const setFormDate = (e) => {

        const newDate = e.target.value

        const newForm = {

            formMembers: form.formMembers,
            formDate: newDate,
            formAdmin: form.formAdmin,
            formGroupName: form.formGroupName,
            formDescription: form.formDescription
        }

        setForm(newForm)
    }

    const setFormAdmin = (e) => {

        const newAdmin = e.target.value

        const newForm = {

            formMembers: form.formMembers,
            formDate: form.formDate,
            formAdmin: newAdmin,
            formGroupName: form.formGroupName,
            formDescription: form.formDescription
        }

        setForm(newForm)
    }

    const setFormGroupName = (e) => {

        const newGroupName = e.target.value

        const newForm = {

            formMembers: form.formMembers,
            formDate: form.formDate,
            formAdmin: form.formAdmin,
            formGroupName: newGroupName,
            formDescription: form.formDescription
        }

        setForm(newForm)
    }

    const setFormDescription = (e) => {

        const newDescription = e.target.value

        const newForm = {

            formMembers: form.formMembers,
            formDate: form.formDate,
            formAdmin: form.formAdmin,
            formGroupName: form.formGroupName,
            formDescription: newDescription
        }

        setForm(newForm)
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
                    // onChange={(e) => setField(form.formMembers, e.target.value)}
                    onChange={setFormMembers}
                />
            </div>

            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                    type="Date"
                    className="form-control"
                    id="date"
                    placeholder="date"
                    //onChange={(e) => setField(form.formDate, e.target.value)}
                    onChange={setFormDate}
                />
            </div>

            <div className="form-group">
                <label htmlFor="admin">Admin</label>
                <input
                    type="text"
                    className="form-control"
                    id="Admin"
                    placeholder="admin"
                    //onChange={(e) => setField(form.formAdmin, e.target.value)}
                    onChange={setFormAdmin}
                />
            </div>

            <div className="form-group">
                <label htmlFor="groupName">Group Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="groupName"
                    placeholder="Group name"
                    //onChange={(e) => setField(form.formGroupName, e.target.value)}
                    onChange={setFormGroupName}
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    className="form-control"
                    id = "Description"
                    placeholder= "Ex CS5500 study group"
                    //onChange={(e) => setField(form.formDescription, e.target.value)}
                    onChange={setFormDescription}
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
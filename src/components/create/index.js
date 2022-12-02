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
        username: '', formDate: '', formAdmin: [], formGroupName: '', formDescription: ''
    })
    const [members, setMembers] = useState([])


    const [errors, setErrors] = useState({
    })


    const handleAddMembers = (e) => {

        e.preventDefault();

        // current user that is typed inside of text box
        const newMember = {...form}

        // const updatedMembers = [...members,newMember]
        // setMembers(updatedMembers)
        // console.log(members)
        //setForm({...form, username: newMember})

        setMembers([...members,newMember])

        console.log(members)




        // create a new form doesnt work currently

        // const newForm = {
        //     formMembers: members,
        //     formDate: form.formDate,
        //     formAdmin: form.formAdmin,
        //     formGroupName: form.formGroupName,
        //     formDescription: form.formDescription
        // }

        // setForm(newForm)

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
                    //onChange={setFormDate}
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
                    //onChange={setFormAdmin}
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
                    //onChange={(e) => setField(form.formGroupName, e.target.value)}
                    //onChange={setFormGroupName}
                    onChange = {(e) => setForm({...form, formGroupName: e.target.value})}
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    className="form-control"
                    id = "Description"
                    placeholder= "Ex CS5500 study group"
                    //onChange={(e) => setField(form.formDescription, e.target.value)}
                    //onChange={setFormDescription}
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

                <button type="button" className=" btn btn-primary btn-lg active">Add Admin</button>
            </div>
            <pre>
                {JSON.stringify(form, null, 2)}
            </pre>
            <pre>
                {JSON.stringify(members, null, 2)}
            </pre>

        </Form>

    );
};
export default CreateGroup;
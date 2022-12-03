import React, {useState} from "react";
import {Form, FormControl} from "react-bootstrap";


const CreateGroup = () => {

    // error handling
        // if things are empty
        // form validation
    // connection to group service
        // user id is needed but pretty sure group object is complete


    const [form, setForm] = useState({
        username: '', formDate: '', formAdmin: '', formGroupName: '', formDescription: ''
    })
    const [members, setMembers] = useState([])

    const [admins, setAdmins] = useState([])

    const [userNameError, setUserNameErrors] = useState(false)
    const [dateError, setDateErrors] = useState(false)
    const [adminError, setAdminErrors] = useState(false)
    const [groupNameError, setGroupNameErrors] = useState(false)
    const [descriptionError, setDescriptionErrors] = useState(false)


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

        if(form.username.length === 0){
            setUserNameErrors(true)
        }

        if(form.username.length > 0 && userNameError === true){
            setUserNameErrors(false)
        }
        if (form.formDate.length === 0){
            setDateErrors(true)
        }

        if(form.formDate.length > 0 && dateError === true){
            setDateErrors(false)
        }

        if (form.formAdmin.length === 0){
            setAdminErrors(true)
        }

        if(form.formAdmin.length > 0 && adminError === true){
            setAdminErrors(false)
        }

        if (form.formGroupName.length === 0){
            setGroupNameErrors(true)
        }

        if(form.formGroupName.length > 0 && groupNameError === true){
            setGroupNameErrors(false)
        }

        console.log(form)

    }


    return(
        <Form>

            <div className="form-group">
                <label htmlFor="membersList">Username</label>
                <input
                    type="text"
                    className="form-control"
                    id="membersList"
                    placeholder="Members"
                    value = {form.username}
                    onChange={(e) => setForm({...form, username: e.target.value})}
                />
            </div>

            <div className='' style={{color: 'red'}}>
                {userNameError?
                <label htmlFor='error' className='mt-2 mb-2' color='red' >
                    Member cant be empty </label>:''}
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

            <div className='' style={{color: 'red'}}>
                {dateError?
                    <label htmlFor='error' className='mt-2 mb-2' color='red' >
                        Date cant be empty </label>:''}
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

            <div className='' style={{color: 'red'}}>
                {adminError?
                    <label htmlFor='error' className='mt-2 mb-2' color='red' >
                        Admins cant be empty </label>:''}
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

            <div className='' style={{color: 'red'}}>
                {groupNameError?
                    <label htmlFor='error' className='mt-2 mb-2' color='red' >
                        Group name cant be empty </label>:''}
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


            <div className = 'mb-4 mt-4 text-center'>
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
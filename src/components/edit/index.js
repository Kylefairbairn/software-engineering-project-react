import React, {useState} from "react";
import {Form, FormControl} from "react-bootstrap";


const EditGroup = () => {

    // error handling
    // if things are empty
    // form validation
    // connection to group service
    // user id is needed but pretty sure group object is complete

    const allUsernames = []
    const allAdmins = []

    const [form, setForm] = useState({
        username: '', date: '', admin: '', groupName: '', description: ''
    })
    const [groupMembers, setGroupMembers] = useState([])
    const [admins, setAdmins] = useState([])
    const [userNameError, setUserNameErrors] = useState(false)
    const [dateError, setDateErrors] = useState(false)
    const [adminError, setAdminErrors] = useState(false)
    const [groupNameError, setGroupNameErrors] = useState(false)


    const handleAddMembers = (e) => {
        e.preventDefault();
        const newMember = {...form}
        setGroupMembers([...groupMembers,newMember])
    }


    const handleAddAdmin = (e) => {
        e.preventDefault()
        const newAdmin = {...form}
        setAdmins([...admins, newAdmin])
    }


    const handleCreateGroupFromEntries = () => {

        findUsers()
        findAdmins()

        if(form.username.length === 0){
            setUserNameErrors(true)
        }

        if(form.username.length > 0 && userNameError === true){
            setUserNameErrors(false)
        }

        if (form.date.length === 0){
            setDateErrors(true)
        }
        if(form.date.length > 0 && dateError === true){
            setDateErrors(false)
        }

        if (form.admin.length === 0){
            setAdminErrors(true)
        }

        if(form.admin.length > 0 && adminError === true){
            setAdminErrors(false)
        }

        if (form.groupName.length === 0){
            setGroupNameErrors(true)
        }

        if(form.groupName.length > 0 && groupNameError === true){
            setGroupNameErrors(false)
        }

        create()

    }

    const create = () => {

        const uid = groupMembers[0]

        const group = {
            members: allUsernames,
            createdOn: form.date,
            admin: allAdmins,
            groupName: form.groupName,
            description: form.description
        }

        // change service to create group with username
        // need to change tuiter end path to match service path
        // axios.post('${BASE_URL)/$uid',group).then(response => response.data)

    }


    const findUsers = () => {
        let membersLength = groupMembers.length;
        for(let i = 0; i <membersLength; i++){
            if(groupMembers[i].username !== ""){
                allUsernames.push(groupMembers[i].username)
            }
        }

    }

    const findAdmins = () => {
        let adminsLength = admins.length;
        for(let i = 0; i <adminsLength; i++){
            if(admins[i].admin !==""){
                allAdmins.push(admins[i].admin)
            }
        }
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
                    onChange = {(e) => setForm({...form, date: e.target.value})}
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
                    onChange = {(e) => setForm({...form, admin: e.target.value})}
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
                    onChange = {(e) => setForm({...form, groupName: e.target.value})}
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
                    onChange = {(e) => setForm({...form, description: e.target.value})}
                    rows="3">
                </textarea>
            </div>


            <div className = 'mb-4 mt-4 text-center'>
                <button
                    type="button"
                    className=" btn btn-primary btn-lg active me-2 "
                    onClick={handleCreateGroupFromEntries}
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
                {JSON.stringify(form, null, 2)}
            </pre>
            <pre>
                {/*{JSON.stringify(admins, null, 2)}*/}
                {/*{JSON.stringify(groupMembers, null, 2)}*/}
            </pre>

        </Form>

    );
};
export default EditGroup;
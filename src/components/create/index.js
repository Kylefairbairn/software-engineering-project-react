import React, {useState} from "react";
import {Form, FormControl} from "react-bootstrap";
import * as usersService from "../../services/users-service";
import * as groupSerivce from "../../services/groups-service"


const CreateGroup = () => {

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


    const handleAddMembers = async () => {
        let user = await usersService.findUserByUsername(form.username)

        if(user !== null){
            const newMember = {...form}
            setGroupMembers([...groupMembers, newMember])
        }

    }


    const handleAddAdmin = async () => {
        let validAdmin = await usersService.findUserByUsername(form.admin)

        if(validAdmin !== null){
            const newAdmin = {...form}
            setAdmins([...admins, newAdmin])
        }
    }


    const formEntryHandler = () => {

        let flag = false

        if(form.username.length === 0){
            setUserNameErrors(true)
            flag = true
        }

        if(form.username.length > 0 && userNameError === true){
            setUserNameErrors(false)
            flag = true
        }

        if (form.date.length === 0){
            setDateErrors(true)
            flag = true
        }
        if(form.date.length > 0 && dateError === true){
            setDateErrors(false)
            flag = true
        }

        if (form.admin.length === 0){
            setAdminErrors(true)
            flag = true
        }

        if(form.admin.length > 0 && adminError === true){
            setAdminErrors(false)
            flag = true
        }

        if (form.groupName.length === 0){
            setGroupNameErrors(true)
            flag = true
        }

        if(form.groupName.length > 0 && groupNameError === true){
            setGroupNameErrors(false)
            flag = true
        }

        return flag
    }


    const findUsers = async () => {
        let membersLength = groupMembers.length;
        let flag = false
        // more than one member in group
        for (let i = 0; i < membersLength; i++) {
            if (groupMembers[i].username !== "") {
                let valid = await usersService.findUserByUsername(groupMembers[i].username)
                if (valid !== null) {
                    console.log(valid)
                    allUsernames.push(groupMembers[i].username)
                }
            }
        }

        // one member in group
        if (form.username !== "" && groupMembers.length === 0) {
            let valid = await usersService.findUserByUsername(form.username)
            if (valid !== null) {
                allUsernames.push(form.username)
            }

        }

    }

    const findAdmins = async () => {
        let adminsLength = admins.length;

        // more than one member in group
        for (let i = 0; i < adminsLength; i++) {
            if (admins[i].admin !== "") {
                let valid = await usersService.findUserByUsername(form.admin)
                if(valid !== null){
                    allAdmins.push(admins[i].admin)
                }
            }
        }

        // one member in group
        if (form.admin !== '' && groupMembers.length === 0) {
            let valid = await usersService.findUserByUsername(form.admin)
            if(valid !== null){
                allAdmins.push(form.admin)
            }
        }

    }


    const createNewGroup = async () => {

        let invalidEntry = formEntryHandler()
        await findUsers()
        await findAdmins()

        if(allUsernames.length !== 0 && allAdmins.length !== 0 && invalidEntry !== true){
            let user = await usersService.findUserByUsername(allUsernames[0])
            let userID = user._id

            const group = {
                members: allUsernames,
                createdOn: form.date,
                admin: allAdmins,
                groupName: form.groupName,
                description: form.description
            }

            console.log(group)

            let status = await groupSerivce.createGroup(userID, group)

            console.log(status)

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
                    onClick={createNewGroup}
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
export default CreateGroup;
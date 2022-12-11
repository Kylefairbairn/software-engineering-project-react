import React, {useState} from "react";
import {Form, FormControl} from "react-bootstrap";
import AddMemberModal from "../create/AddMemberModal"
import * as usersService from "../../services/users-service";
import * as groupSerivce from "../../services/groups-service"

import {useNavigate} from "react-router-dom";
import * as authService from "../../services/auth-service";


const CreateGroup = () => {

    // figure out how to create a modal or notfication if a member/admin/group has been added/created

    let navigate = useNavigate()

    const [form, setForm] = useState({
        username: '', date: '', admin: '', groupName: '', description: ''
    })
    const [groupMembers, setGroupMembers] = useState([])
    const [admins, setAdmins] = useState([])
    const [userNameError, setUserNameErrors] = useState(false)
    const [createGroup, setCreateGroup] = useState(false)
    const [addMemberError, setAddMemberError] = useState(false)
    const [addAdminError, setAddAdminError] = useState(false)
    const [dateError, setDateErrors] = useState(false)
    const [setAdminError, setSetAdminErrors] = useState(false)
    const [groupNameError, setGroupNameErrors] = useState(false)




    const handleAddMembers = async () => {

        if(form.username !== "") {
            let user = await usersService.findUserByUsername(form.username)

            if (user !== null) {
                setGroupMembers([...groupMembers, user._id])
            }
            else{
                setAddMemberError(true)
            }
        }

    }


    const handleAddAdmin = async () => {

        if(form.admin !== "") {
            let validAdmin = await usersService.findUserByUsername(form.admin)

            if (validAdmin !== null) {
                setAdmins([...admins,validAdmin._id])
            }
            else{
                setAddAdminError(true)
            }
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
            setSetAdminErrors(true)
            flag = true
        }

        if(form.admin.length > 0 && setAdminError === true){
            setSetAdminErrors(false)
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

    const createNewGroup = async () => {

        let invalidEntry = formEntryHandler()

        const currentUser = await authService.profile()

        if(currentUser !== null && invalidEntry === false) {

            const group = {
                members: groupMembers,
                createdOn: form.date,
                admin: admins,
                groupName: form.groupName,
                description: form.description
            }

            let status = await groupSerivce.createGroup(currentUser._id, group)
            //     navigate("/messages")
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
                {setAdminError?
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
                    className=" btn btn-primary btn-lg active me-2  "
                    onClick={handleAddMembers}
                >Add Member
                </button>

                <button type="button"
                        className=" btn btn-primary btn-lg active"
                        onClick={handleAddAdmin}
                >Add Admin</button>
            </div>

            <div className='text-center' style={{color: 'red'}}>
                {addMemberError?
                    <label htmlFor='error' className='mt-2 mb-2' color='red' >
                        Can not add new member (not a valid username) </label>:''}
            </div>

            <div className='text-center' style={{color: 'green'}}>
                {addMemberError?
                    <label htmlFor='error' className='mt-2 mb-2'>
                        Can not add new member (not a valid username) </label>:''}
            </div>

            <div className='' style={{color: 'red'}}>
                {createGroup?
                    <label htmlFor='error' className='mt-2 mb-2' color='red' >
                        Error when creating group! Try Again </label>:''}
            </div>



            <div className='text-center' style={{color: 'red'}}>
                {addAdminError?
                    <label htmlFor='error' className='mt-2 mb-2' color='red' >
                        Can not add new admin (not a valid username) </label>:''}
            </div>

        </Form>

    );
};
export default CreateGroup;
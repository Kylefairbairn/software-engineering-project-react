import React from "react";
import {Form} from "react-bootstrap";
const CreateGroup = () => {
    // member list
    // date
    // admin list
    //group name
    //descriptions
    return(
        <Form>
            <div className="form-group">
                <label htmlFor="membersList">Members</label>
                <input type="text" className="form-control" id="membersList" placeholder="Members"/>
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
            <div>
                <button type="button" className="pull-right btn btn-primary btn-lg active">Primary button</button>
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
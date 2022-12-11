import AdminItem from "./admin-item";

import groups from "../groups";

// member ID
// member Username
// Group

const AdminList = (
    {
        group,
        adminList = [],
    }
) => {
    return (
        <>
            <ul className={'list-group'}>
                {
                    adminList.map && adminList.map(admin =>
                        <AdminItem key={admin} group={group} uid={admin}/>)
                }
            </ul>
        </>
    )
}

export default AdminList
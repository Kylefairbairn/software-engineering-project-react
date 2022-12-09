import MemberItem from "./member-item";
import groups from "../groups";

// member ID
// member Username
// Group

const MemberList = (
    {
        group,
        memberList = [],
    }
) => {
    return (
        <>
            <ul className={'list-group'}>
                {
                    memberList.map && memberList.map(member =>
                        <MemberItem key={member._id} group={group} memberUsername={member.username}/>)
                }
            </ul>
        </>
    )
}

export default MemberList
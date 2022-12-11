import MemberItemNoButton from "./member-item-noButton";

import groups from "../groups";

// member ID
// member Username
// Group

const MemberListNoButton = (
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
                        <MemberItemNoButton key={member} group={group} uid={member}/>)
                }
            </ul>
        </>
    )
}

export default MemberListNoButton
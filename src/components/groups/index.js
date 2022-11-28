import GroupItem from "./group-item";

const GroupsList = (
    {
        groups =
        []
    }
) => {
    return (
        <>
            <ul className={'list-group'}>
                {
                    groups.map && groups.map(group =>
                               <GroupItem group={group}/>)
                }
            </ul>
        </>
    )
}

export default GroupsList
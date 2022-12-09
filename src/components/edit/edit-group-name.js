

const EditGroupName = (
    {groupName}
) => {

    const handleChange = () => {
        console.log('text box changed')
    }

    return (
        <div>
            <h1>Current Name:
                <input type='text' value={groupName} onChange={handleChange}/>
            </h1>
        </div>
)

};

export default EditGroupName;
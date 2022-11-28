import {Link} from "react-router-dom";

const GroupItem = ({group}) => {
    return (

        <li className={'list-group-item'}>
            <Link to={'/messages/group'}
                  style={{textDecoration: 'none', color: 'black'}}>
                <div className={'row'}>
                    <div className={'col'}>
                        <div className={'text-black fs-4'}>
                            {group.groupName}
                        </div>
                        <div>
                            {group.description}
                        </div>
                    </div>
                    <div className={'col'}>
                    <span className={'float-end'}>
                        Members: {group.members.length}
                    </span>
                    </div>
                </div>
            </Link>
        </li>
    )
}
export default GroupItem
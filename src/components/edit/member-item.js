import {Link} from "react-router-dom";

const MemberItem = (
    {
      memberUsername, group
    }
) => {

    return (
        <li className={'list-group-item'}>
                <div className={'row'}>
                    <div className={'col'}>
                    <span className={'float-end'}>
                        10{memberUsername}
                    </span>
                    </div>
                </div>
        </li>
    )
}
export default MemberItem
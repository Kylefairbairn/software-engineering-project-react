import React, {useState} from "react";
import GroupsList from "../groups";


const Messages = () => {
    const [groups, setGroups] = useState([])
    const findGroups = () => {

    }
  return(
      <div className={'pt-2'}>
        <div className={'ps-2 row'}>
          <div className={'col'}>
            <h3>Messages</h3>
          </div>
          <div className={'col'}>
            <button className={'btn btn-primary float-end'}>
              Create Group
            </button>
          </div>
        </div>
        <div className={'border border-dark'}>
            <GroupsList groups={groups}/>
        </div>
      </div>
  );
};
export default Messages;
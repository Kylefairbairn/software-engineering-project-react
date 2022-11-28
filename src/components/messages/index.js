import React, {useEffect, useState} from "react";
import GroupsList from "../groups";
import * as service from "../../services/groups-service";


const Messages = () => {
    const [groups, setGroups] = useState([])
    const findGroups = () =>
        service.findGroupsForUser('633c41de89045f21193ea004')
            .then(groups => setGroups(groups))
    useEffect(findGroups, [])
  return(
      <div className={'pt-2'}>
          <div className={'ps-2 row'}>
              <div className={'col-5'}>
                  <h3>Messages</h3>
              </div>
              <div className={'col'}>
                  <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search for User in Groups"
                             aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                      <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Search</button>
                      </div>
                  </div>
              </div>
          </div>
          <div className={'pt-2'}>
              <GroupsList groups={groups}/>
          </div>
          <div className={'pt-2'}>
              <button className={'btn btn-primary float-end'}>
                  Create Group
              </button>
          </div>
      </div>
  );
};
export default Messages;
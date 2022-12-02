import React, {useEffect, useState} from "react";
import GroupsList from "../groups";
import * as service from "../../services/groups-service";

const Messages = () => {
    const [groups, setGroups] = useState([])
    const [ouid, setOuid] = useState('633c41de89045f21193ea004')

    const findGroups = () =>
        service.findGroupsForUser('633c41de89045f21193ea004')
            .then(groups => setGroups(groups))

    const findCommonGroups = (ouid) =>
        service.findAllCommonGroups('633c41de89045f21193ea004', ouid)
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
                      <input id={'search-bar'} type="text" className="form-control" placeholder="Recipient's username"
                             aria-label="Recipient's username" aria-describedby="basic-addon2"
                             onChange={(e) => setOuid(e.target.value)}/>
                      <div className="input-group-append">
                        <button className="btn btn-outline-secondary"
                                type="button" onClick={() =>
                            ouid === '' ? setGroups(findGroups()) : setGroups(findCommonGroups(ouid))}>
                            Search
                        </button>
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
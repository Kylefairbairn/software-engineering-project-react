import * as service from "../../services/auth-service"
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const Profile = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  useEffect(async () => {
    try {
      const user = await service.profile();
      setProfile(user);
    } catch (e) {
      navigate('/login');
    }
  }, []);
  const logout = () => {
    service.logout()
        .then(() => navigate('/login'));
  }
  return(
      <div className="ttr-profile">
        <div className="">
          <div className={'float-end'}>
            <button className={'btn btn-danger rounded-pill'} onClick={logout}>Logout</button>
          </div>
          <h2 className="fw-bolder">
            Welcome back!
          </h2>
          <h4>
            User: {profile.username}
          </h4>
        </div>
      </div>
  );
};
export default Profile;
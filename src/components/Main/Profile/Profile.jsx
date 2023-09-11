import axios from "axios";
import { useEffect, useState } from "react";
import Info from "./Info/Info";
import s from "./Profile.module.scss";
import SplitLayout from "./SplitLayout/SplitLayout";
import { useParams } from "react-router-dom";

function Profile(props) {
  let userId = useParams();

  if (userId.id) {
    userId = userId.id;
  }

  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        setAuthProfile(response.data);
      });
  }, [userId]);

  let [authProfile, setAuthProfile] = useState({
    aboutMe: null,
    contacts: {
      facebook: null,
      github: null,
      instagram: null,
      mainLink: null,
      twitter: null,
      vk: null,
      website: null,
      youtube: null,
    },
    fullName: null,
    lookingForAJob: false,
    lookingForAJobDescription: null,
    photos: { small: null, large: null },
    userId: null,
  });

  return (
    <div className={s.wrapper}>
      <Info img={authProfile.photos.small} fullName={authProfile.fullName} />
      <SplitLayout
        img={authProfile.photos.small}
        fullName={authProfile.fullName}
      />
    </div>
  );
}
export default Profile;

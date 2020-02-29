import React from "react";

const profileData = {
  kim: {
    name: "honggildong",
    description: "홍길동"
  },
  son: {
    name: "heungmin",
    description: "축구선수"
  }
};
const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사람입니다</div>;
  }
  return (
    <div>
      {profile.name}은 {profile.description}입니다
    </div>
  );
};

export default Profile;

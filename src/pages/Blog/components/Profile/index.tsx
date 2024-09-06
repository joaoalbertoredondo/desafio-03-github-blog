import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaBuilding, FaUserGroup } from "react-icons/fa6";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { api } from "../../../../lib/axios";
import { useEffect, useState } from "react";

interface ProfileData {
  name: string;
  bio: string;
  login: string;
  avatar_url: string;
  html_url: string;
  company?: string;
  followers: number;
}

const username = import.meta.env.VITE_GITHUB_USERNAME;

function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>(
    {} as ProfileData
  );

  async function getProfileData() {
    const response = await api.get(`/users/${username}`);

    setProfileData(response.data);
  }

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <ProfileContainer>
      <ProfilePicture>
        <img src={profileData.avatar_url} alt="" />
      </ProfilePicture>

      <ProfileDetails>
        <header>
          <h1>{profileData.name}</h1>
          <a href="https://github.com/joaoalbertoredondo">
            GITHUB
            <BsBoxArrowUpRight size={12} />
          </a>
        </header>
        <p>{profileData.bio}</p>
        <ul>
          <li>
            <FaGithub size={18} />
            {profileData.login}
          </li>
          {profileData?.company && (
            <li>
              <FaBuilding size={18} />
              {profileData.company}
            </li>
          )}
          <li>
            <FaUserGroup size={18} />
            {profileData.followers}
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
}

export default Profile;

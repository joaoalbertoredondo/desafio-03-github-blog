import { BsBoxArrowUpRight } from "react-icons/bs";
import avatar from "../../../../assets/avatar.svg";
import { FaGithub } from "react-icons/fa";
import { FaBuilding, FaUserGroup } from "react-icons/fa6";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture>
        <img src={avatar} alt="" />
      </ProfilePicture>

      <ProfileDetails>
        <header>
          <h1>Cameron Williamson</h1>
          <a href="#">
            GITHUB
            <BsBoxArrowUpRight size={12} />
          </a>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FaGithub size={18} />
            GitHub
          </li>
          <li>
            <FaBuilding size={18} />
            RocketSeat
          </li>
          <li>
            <FaUserGroup size={18} />
            32 Seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
}

export default Profile;

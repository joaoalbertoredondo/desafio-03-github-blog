import { BsBoxArrowUpRight } from "react-icons/bs";
import { PostHeaderContainer } from "./styles";
import { SlArrowLeft } from "react-icons/sl";
import { FaCalendarDay, FaComment, FaGithub } from "react-icons/fa";

function PostHeader() {
  return (
    <PostHeaderContainer>
      <nav>
        <a href="">
          <SlArrowLeft size={12} />
          Voltar
        </a>
        <a href="">
          Ver no GitHub
          <BsBoxArrowUpRight size={12} />
        </a>
      </nav>

      <div>
        <h1>JavaScript data types and data structures</h1>
        <ul>
          <li>
            <FaGithub size={18} />
            GitHub
          </li>
          <li>
            <FaCalendarDay size={18} />
            Há 1 dia
          </li>
          <li>
            <FaComment size={18} />
            5 Comentários
          </li>
        </ul>
      </div>
    </PostHeaderContainer>
  );
}

export default PostHeader;

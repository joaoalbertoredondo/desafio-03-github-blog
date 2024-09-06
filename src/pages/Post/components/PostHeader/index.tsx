import { BsBoxArrowUpRight } from "react-icons/bs";
import { PostHeaderContainer } from "./styles";
import { SlArrowLeft } from "react-icons/sl";
import { FaCalendarDay, FaComment, FaGithub } from "react-icons/fa";
import { IPost } from "../../../Blog";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { useEffect, useState } from "react";

interface PostHeaderProps {
  postData: IPost;
}

function PostHeader({ postData }: PostHeaderProps) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    setFormattedDate(
      postData?.created_at
        ? formatDistanceToNow(new Date(postData.created_at), {
            locale: ptBR,
            addSuffix: true,
          })
        : ""
    );
  }, [postData.created_at]);

  return (
    <PostHeaderContainer>
      <nav>
        <a href="/">
          <SlArrowLeft size={12} />
          Voltar
        </a>
        <a href={postData.html_url} target="_blank">
          Ver no GitHub
          <BsBoxArrowUpRight size={12} />
        </a>
      </nav>

      <div>
        <h1>{postData.title}</h1>
        <ul>
          <li>
            <FaGithub size={18} />
            {postData?.user?.login || ""}
          </li>
          <li>
            <FaCalendarDay size={18} />
            {formattedDate || ""}
          </li>
          <li>
            <FaComment size={18} />
            {postData.comments} Comentários
          </li>
        </ul>
      </div>
    </PostHeaderContainer>
  );
}

export default PostHeader;

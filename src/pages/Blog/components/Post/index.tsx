import { formatDistanceToNow } from "date-fns";
import { IPost } from "../..";
import { Card } from "./styles";
import { ptBR } from "date-fns/locale/pt-BR";

interface PostProps {
  post: IPost;
}

function Post({ post }: PostProps) {
  const publishedDateRelativeToNow = formatDistanceToNow(post.created_at, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <Card>
      <a href={`/post/${post.number}`}>
        <header>
          <h1>{post.title}</h1>
          <span>{publishedDateRelativeToNow}</span>
        </header>
        <p>{post.body}</p>
      </a>
    </Card>
  );
}

export default Post;

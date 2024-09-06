import { PostContentContainer } from "./styles";

interface PostContentProps {
  content: string;
}

function PostContent({ content }: PostContentProps) {
  return (
    <PostContentContainer>
      <main>
        <p>{content}</p>
      </main>
    </PostContentContainer>
  );
}

export default PostContent;

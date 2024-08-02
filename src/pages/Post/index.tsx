import Header from "../../components/Header";
import PostContent from "./components/PostContent";
import PostHeader from "./components/PostHeader";
import { PostContainer } from "./styles";

function Post() {
  return (
    <PostContainer>
      <Header />
      <PostHeader />
      <PostContent />
    </PostContainer>
  );
}

export default Post;

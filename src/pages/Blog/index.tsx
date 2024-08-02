import Header from "../../components/Header";
import Post from "./components/Post";
import Profile from "./components/Profile";
import SearchInput from "./components/SearchInput";
import { BlogContainer } from "./styles";

function Blog() {
  return (
    <BlogContainer>
      <Header />

      <Profile />

      <SearchInput />

      <Post />
    </BlogContainer>
  );
}

export default Blog;

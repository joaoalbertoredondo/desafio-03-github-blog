import { useCallback, useEffect, useState } from "react";
import Post from "./components/Post";
import Profile from "./components/Profile";
import SearchInput from "./components/SearchInput";
import { BlogContainer, Posts } from "./styles";
import { api } from "../../lib/axios";

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

function Blog() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = useCallback(
    async (query: string = "") => {
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repoName}`
      );

      setPosts(response.data.items);
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <BlogContainer>
      <Profile />

      <SearchInput getPosts={getPosts} postsLength={posts.length} />

      <Posts>
        {posts.map((post) => (
          <Post key={post.number} post={post} />
        ))}
      </Posts>
    </BlogContainer>
  );
}

export default Blog;

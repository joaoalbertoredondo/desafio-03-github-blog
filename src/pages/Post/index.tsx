import { useCallback, useEffect, useState } from "react";
import PostContent from "./components/PostContent";
import PostHeader from "./components/PostHeader";
import { PostContainer } from "./styles";
import { api } from "../../lib/axios";
import { IPost } from "../Blog";
import { useParams } from "react-router-dom";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost);

  const { id } = useParams();

  const getPost = useCallback(async () => {
    const response = await api.get(
      `/repos/${username}/${repoName}/issues/${id}`
    );

    setPostData(response.data);
  }, [postData]);

  useEffect(() => {
    getPost();
  }, []);

  return (
    <PostContainer>
      <PostHeader postData={postData} />

      <PostContent content={postData.body} />
    </PostContainer>
  );
}

export default Post;

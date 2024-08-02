import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Post from "./pages/Post";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  );
}

export default Router;

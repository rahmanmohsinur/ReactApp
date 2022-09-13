import Home from "./Home";
import {useMetaTitle} from "../hooks/MetaTitle"
import BlogPosts from "../components/BlogPosts";

const Blogs = () => {
  const siteName = "Mohsinur Rahman"
  const [title, setTitle] = useMetaTitle("Blog Posts");
  
    return (
        <>
            <BlogPosts />
        </>
    );
};
  
export default Blogs;
import Home from "./Home";
import {useDocTitle} from "../components/DocTitle"

const Blogs = () => {
  const [doctitle, setDocTitle] = useDocTitle("Blog Posts of Mohsinur Rahman");
  
    return (
        <>
            
            <Home />
        </>
    );
};
  
export default Blogs;
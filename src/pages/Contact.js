
import Contactme from "../components/Contactme";
import ErrorBoundary from "../components/ErrorBoundary";
import {useDocTitle} from "../components/DocTitle"

document.title = "Contact | Mohsinur Rahman";

const Contact = () => {
  const [doctitle, setDocTitle] = useDocTitle("Contact With Mohsinur Rahman");
    return  (
      
      <>

<ErrorBoundary>
    <Contactme />
</ErrorBoundary>
</>
  );
  };
  
  export default Contact;
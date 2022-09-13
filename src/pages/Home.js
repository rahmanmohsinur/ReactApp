
import Contactme from "../components/Contactme";
import ErrorBoundary from "../components/ErrorBoundary";
import About from "./About";
import Portfolio from "./Portfolio";
import {useDocTitle} from "../components/DocTitle"


const Home = (props) => {
    const [doctitle, setDocTitle] = useDocTitle("Home Page | Mohsinur Rahman");
    return (
        <>
            <ErrorBoundary>
                <About title={props.title} siteName={props.siteName} />
            </ErrorBoundary>

            <ErrorBoundary>
                <Portfolio />
            </ErrorBoundary>

            <ErrorBoundary>
                <Contactme />
            </ErrorBoundary>
        </>
    );
};
  
export default Home;
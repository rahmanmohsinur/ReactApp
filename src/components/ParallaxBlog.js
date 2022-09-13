import ErrorBoundary from "./ErrorBoundary";
import Social from "./Social";

const ParallaxBlog = () => {
    return (
        <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
            <div className="w3-display-middle">
                <h1>
                    <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity" style={{textTransform: "uppercase"}}>
                        {/* {this.props.title}<span className="w3-hide-small"> of {this.props.siteName}</span> */}
                    </span>
                </h1>
            </div>
        <ErrorBoundary>
            <Social />
        </ErrorBoundary>
    </div>
        );
  };
  
  export default ParallaxBlog;
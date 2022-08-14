import React, {Component} from "react";
import ReactDOM from 'react-dom/client';


const shoot = () => {
    alert("Great Shot!");
  }

class Football extends Component {
render() {
  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}
}


const root2 = ReactDOM.createRoot(document.getElementById('root3'));
root2.render(<Football />);
//export default Football
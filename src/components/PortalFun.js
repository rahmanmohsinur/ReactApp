import React from 'react';
import ReactDOM from 'react-dom';


function PortalFun() {
    return ReactDOM.createPortal(
        <p>Hallo</p>,
         document.getElementById('portal-fun-root')
    )
}

// This function must call in App.js before rendering in portal-fun-root dive
export default PortalFun
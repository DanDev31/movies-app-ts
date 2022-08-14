import React from 'react'
import ReactDOM from 'react-dom';


interface PortalProps{
    target:string;
    children:any;
}

export const Portal:React.FC<PortalProps> = ({target, children}) => {
    const domElement = document.getElementById(target)

    return domElement ?
    ReactDOM.createPortal(children, domElement)
    :
    null;
}

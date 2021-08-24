import React, { useState, useRef, useLayoutEffect } from 'react'

const ProgressBar = ({name, level}) => {

    const [width, setWidth] = useState(0);
    const widthTitle = useRef();

    useLayoutEffect(() =>{
        if(widthTitle.current){
            setWidth(widthTitle.current.offsetWidth)
        }
    }, [])

    const widthLevel = "calc(55% - "+ width+'px)';
    const style = level +'%';

    return (
        <div className="progresses">
            <div className="progress-infos">
                <h3 className="progress-title" ref={widthTitle}>{name &&(name)}</h3>
                <span className="progress-number" style={{left: widthLevel }}>{level &&(level)}</span>
            </div>
            <div className="progress">
                <div className="progress-bar" style={{width: style }}></div>
            </div>
        </div>
    )
}

export default ProgressBar

import React, { Fragment, useState, useRef, useLayoutEffect } from 'react'

const Carousel = props => {

    const [style, setStyle] = useState(0);
    const container = useRef();

    let item = null
    let currentItem = 0
    let isMobile = false
    let moveCallbacks = []
    let offset = 0
    let root = props.children.props
    let childrenList = [].slice.call(props.children.props.children);

    if (childrenList) {
        item = childrenList.map((child) => {
            return <div className="carousel--item" key={child._source.lineNumber}>{child}</div>
        })
    }

    let slidesToScroll = 1
    let slidesVisible = 1

    let options = Object.assign({}, {
        slidesToScroll: 1,
        slidesVisible: 1,
        loop: false,
        pagination: false,
        navigation: true,
        infinite: false,
        autoplay:false,
        interval:5000
    }, props)

    useLayoutEffect(() =>{
        let ratio = item.length / slidesVisible
        setStyle((ratio * 100) + '%')
        console.log(ratio);
        console.log(style);
        item.forEach(item => {
            console.log(item);
        });
    if(style.current){
            let ratio = item.length / slidesVisible
            setStyle((ratio * 100) + '%')
            console.log(ratio);
            item.forEach(item => item.style.width = (100 / slidesVisible) / ratio + '%');
        }
    }, [])
    
    return (
        <Fragment> 
            <div className="carausel">
                <div className="carousel--container" ref={container}>
                    {item && (item)}
                </div>
            </div>
        </Fragment>
        
        
    )
}

export default Carousel

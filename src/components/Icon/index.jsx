import React from 'react'

const Icon = ({name}) => {
    const link = '/sprite.svg#' + name
    return (
        <svg>
          <use href={link} />  
        </svg>
    )
}

export default Icon

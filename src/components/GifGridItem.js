import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    return (
        <>
            <li className="card animate__animated animate__flash animate__delay-2s">
                <img src ={url} alt={title} />
                <p>{title}</p>
            </li>
        </>
    )
}

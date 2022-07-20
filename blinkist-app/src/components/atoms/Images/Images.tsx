import React from 'react'

interface ImagePropsType {

    src?: string,
    alt?: string,
    width?: string,
    height?: string

}

export const Images = (props:ImagePropsType) => {
  return (
    <img src={props.src} alt={props.alt} style={{cursor:"pointer"}} />
  )
}

import { Avatar, AvatarProps } from '@mui/material'
import React from 'react'

interface AvatarsPropsType extends AvatarProps{
    children?: string | React.ReactNode
}

export const Avatars = (props:AvatarsPropsType) => {
  return (
    <Avatar sx={{bgcolor:"#69A6E3"}}>{props.children}</Avatar>
  )
}

import {ThemeOptions } from "@mui/material";
import React from 'react'

declare module '@mui/material/styles' {

    interface Themes {
        background: {
            Dark: string
        }
    }

    interface ThemeOptions{
        background: {
            Light:React.CSSProperties['color']
            Dark: React.CSSProperties['color']
            Hover:React.CSSProperties['color']
        }

        Text:{
            Content:React.CSSProperties['color']
            Title:React.CSSProperties['color']
            Tabs:React.CSSProperties['color']
            Search:React.CSSProperties['color']
        }

        GreyScale:{
            Border:React.CSSProperties['color']
            BodyIcon:React.CSSProperties['color']
            Reading:React.CSSProperties['color']
            FooterIcon:React.CSSProperties['color']
        }
    }
}
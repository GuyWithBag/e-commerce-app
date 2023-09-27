import { Global } from "@emotion/react"; 
import React from "react";

export const Fonts = () => (
    <Global 
        styles={`
            @font-face {
                font-family: 'default'; 
                src: url('./fonts/lato/Lato-BlackItalic.tff')
            }
        `}
    />
)
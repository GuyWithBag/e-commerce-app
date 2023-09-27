import { Global } from "@emotion/react"; 

export const Fonts = () => (
    <Global 
        styles={`
            @font-face {
                font-family: 'default'; 
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url(./lato/Lato-Black.ttf) format('truetype');
            }
        `}
    />
)

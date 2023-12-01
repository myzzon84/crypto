import { useState, useEffect } from "react"

export const UseWidthHeight = () => {
    const [widthHeight, setWidthHeight] = useState([0, 0]);

    useEffect(() => {
        const getWidthHeight = () => {
            let temp = JSON.parse(JSON.stringify(widthHeight));
            temp[0] = window.innerWidth;
            temp[1] = window.innerHeight;
            setWidthHeight(temp);
        }
        getWidthHeight();
        window.addEventListener('resize', getWidthHeight);
        return () => {
            window.removeEventListener('resize', getWidthHeight);
        }
    }, []);

    return widthHeight;
}
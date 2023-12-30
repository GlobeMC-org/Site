import React from 'react';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

import './main.css'

const Site = () => {
    useEffect(() => {
        if (Cookies.get("anim") !== "false") {
            window.location.href = "/anim";
        }
    }, []);

    return(
        <>
            <p>Site!</p>
        </>
    );
}
export default Site;

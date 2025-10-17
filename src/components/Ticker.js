import React from "react";

function Ticker(){
    return(
        <div style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            background: '#222',
            color : 'rgba(241, 244, 241, 1)',
            padding: '10px'
        }}>
            <marquee>Добро пожаловать на сайт!!! </marquee>
        </div>
    )
}

export default Ticker;
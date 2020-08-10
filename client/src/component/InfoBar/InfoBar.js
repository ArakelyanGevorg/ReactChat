import React from 'react'

import './InfoBar.css'
import onLineIcon from '../../Icons/onlineIcon.png'
import closeIcon from '../../Icons/closeIcon.png'

function InfoBar({ room }) {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img src={onLineIcon} alt="onLine" className="onlineIcon"/>
                <h3>{ room }</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="clode icon"/></a>
            </div>
        </div>
    )
}

export default InfoBar

import "./topbar.css"

import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">
                    INeedABudget
                </span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNoneIcon />
                    <span className="topIconBadge">
                        2
                    </span>
                </div>
                <div className="topbarIconContainer">
                    <LanguageIcon />
                    <span className="topIconBadge">
                        2
                    </span>
                </div>
                <div className="topbarIconContainer">
                    <SettingsIcon />
                </div>
                <img src="https://i.pinimg.com/originals/1d/d2/1a/1dd21ab9fca35e90620362aada221036.jpg" 
                    alt="profile" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

import "./sidebar.css"

import InsightsIcon from '@mui/icons-material/Insights';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyleIcon className="sidebarIcon"/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <InsightsIcon className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LineStyleIcon className="sidebarIcon"/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <InsightsIcon className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LineStyleIcon className="sidebarIcon"/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <InsightsIcon className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LineStyleIcon className="sidebarIcon"/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <InsightsIcon className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LineStyleIcon className="sidebarIcon"/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <InsightsIcon className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

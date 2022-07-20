import "./sidebar.css"

import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CategoryIcon from '@mui/icons-material/Category';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">
                    INeedABudget
                </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <HomeIcon className="sidebarIcon"/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <AccountBalanceWalletIcon className="sidebarIcon"/>
                        Accounts
                    </li>
                    <li className="sidebarListItem">
                        <AttachMoneyIcon className="sidebarIcon"/>
                        Transaction
                    </li>
                    <li className="sidebarListItem">
                        <CategoryIcon className="sidebarIcon"/>
                        Category
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className="sidebarIcon"/>
                        Cash Flow
                    </li>
                    <li className="sidebarListItem">
                        <PlaylistAddCheckIcon className="sidebarIcon"/>
                        Plan
                    </li>
                    <li className="sidebarListItem">
                        <CheckCircleOutlineIcon className="sidebarIcon"/>
                        Goals
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

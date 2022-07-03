import "./featuredInfo.css";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import React from 'react'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">
                Revenue
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                    $2,415
                </span>
                <span className="featuredMoneyRate">
                    -11.4 <ArrowUpwardIcon className="featuredIcon"/>
                </span>
            </div>
            <span className="featuredSub">
                Compared to last month
            </span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">
                Revenue
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                    $2,415
                </span>
                <span className="featuredMoneyRate">
                    -11.4 <ArrowDownwardIcon className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">
                Compared to last month
            </span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">
                Revenue
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                    $2,415
                </span>
                <span className="featuredMoneyRate">
                    -11.4 <ArrowUpwardIcon className="featuredIcon" />
                </span>
            </div>
            <span className="featuredSub">
                Compared to last month
            </span>
        </div>
    </div>
  )
}
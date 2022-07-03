import "./home.css";

import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import React from 'react'
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import { userData } from "../../dummyData";

export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart data={userData} title="User Analystics!" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetSmall />
          <WidgetLarge />
        </div>
    </div>
    
  )
}

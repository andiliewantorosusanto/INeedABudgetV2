import "./widgetLarge.css"

import React from 'react'

export default function WidgetLarge() {
  const Button = ({type}) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>
  };
  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">
        Latest Transaction
      </h3>
      <table className="widgetLargeTable">
        <thead>
          <tr className="widgetLargeTr">
            <td className="widgetLargeTh">
              Customer
            </td>
            <td className="widgetLargeTh">
              Date
            </td>
            <td className="widgetLargeTh">
              Amount
            </td>
            <td className="widgetLargeTh">
              Status
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
              <img src="https://i.pinimg.com/originals/1d/d2/1a/1dd21ab9fca35e90620362aada221036.jpg" alt="ralsei" className="widgetLargeImg" />
              <span className="widgetLargeName">
                Ralsei
              </span>
            </td>
            <td className="widgetLargeDate">
              2 Jun 2021
            </td>
            <td className="widgetLargeAmount">
              $122.00
            </td>
            <td className="widgetLargeStatus">
              <Button type="Approved"/>
            </td>
          </tr>
          <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
              <img src="https://i.pinimg.com/originals/1d/d2/1a/1dd21ab9fca35e90620362aada221036.jpg" alt="ralsei" className="widgetLargeImg" />
              <span className="widgetLargeName">
                Ralsei
              </span>
            </td>
            <td className="widgetLargeDate">
              2 Jun 2021
            </td>
            <td className="widgetLargeAmount">
              $122.00
            </td>
            <td className="widgetLargeStatus">
              <Button type="Declined"/>
            </td>
          </tr>
          <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
              <img src="https://i.pinimg.com/originals/1d/d2/1a/1dd21ab9fca35e90620362aada221036.jpg" alt="ralsei" className="widgetLargeImg" />
              <span className="widgetLargeName">
                Ralsei
              </span>
            </td>
            <td className="widgetLargeDate">
              2 Jun 2021
            </td>
            <td className="widgetLargeAmount">
              $122.00
            </td>
            <td className="widgetLargeStatus">
              <Button type="Pending"/>
            </td>
          </tr>
          <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
              <img src="https://i.pinimg.com/originals/1d/d2/1a/1dd21ab9fca35e90620362aada221036.jpg" alt="ralsei" className="widgetLargeImg" />
              <span className="widgetLargeName">
                Ralsei
              </span>
            </td>
            <td className="widgetLargeDate">
              2 Jun 2021
            </td>
            <td className="widgetLargeAmount">
              $122.00
            </td>
            <td className="widgetLargeStatus">
              <Button type="Declined"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

import "./user.css"

import React from 'react'

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">
                Edit User
            </h1>
            <button className="userAddButton">
                Create
            </button>
        </div>
        <div className="userContainer">
            <div className="userShow">

            </div>
            <div className="userUpdate">

            </div>
        </div>
    </div>
  )
}

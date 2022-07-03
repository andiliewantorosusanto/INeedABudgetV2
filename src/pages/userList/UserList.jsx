import "./userList.css"

import React, { useState } from 'react'

import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "@mui/material";
import { userRows } from "../../dummyData";

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", flex: 1  },
        {
            field: "user",
            headerName: "User",
            flex: 1,
            renderCell: (params) => {
            return (
                <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="" />
                {params.row.username}
                </div>
            );
            },
        },
        { field: "email", headerName: "Email",flex: 1,},
        {
            field: "status",
            headerName: "Status",
            flex: 1,
        },
        {
            field: "transaction",
            headerName: "Transaction Volume",
            flex: 1,
        },
        {
            field: "action",
            headerName: "Action",
            flex: 1,
            renderCell: (params) => {
            return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];


  return (
    <div className="userList">
        <DataGrid className="userListGrid"
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
        />
    </div>
  )
}

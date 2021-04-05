
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "antd";

export default function Tasklist() {
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await Axios.get("http://localhost:36795/events").then(
      res => {
        setloading(false);
        setstate(
          res.data.map(row => ({
            Title: row.title,
            Description: row.description,
            id: row.id
          }))
        );
      }
    );
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "Title",
      width: 150
    },
    {
      title: "Description",
      dataIndex: "Description",
      width: 150
    }
  ];

  return (
    <div>
      {loading ? (
        "Loading, Listeyi görebilmek için API ile bağlantısını kurunuz"
      ) : (
        <Table
          columns={columns}
          dataSource={state}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 240 }}
        />
      )}
    </div>
  );
}















// import { List } from "rc-field-form";
// import axios from 'axios';
// import React, {useEffect, useState} from 'react';

// export default function TaskList(){

// const [tasks, setTasks] = useState([]);

// useEffect(()=> {
//         axios.get("http://localhost:36795/events").then(response => {
//             setTasks(response.data);
//         })
//     }, [])

// return(
//     <div>
//                 <ul>
//                     {tasks.map(item =>(
//                         <li key={item.id}>
//                                 Name: {item.title} | Description: {item.description}
//                         </li>   
//                     ))};
//                 </ul>
//     </div>
// )

// }

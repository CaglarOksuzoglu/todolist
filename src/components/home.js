
import React, { useState, useEffect, changeHandler } from "react";
import {useAuth} from "../auth-context";

export default function Home(){
  const {login} = useAuth();
  const {logout} = useAuth();
  const { loggedIn } = useAuth();

  return (
    <div>
      {loggedIn ? (<h2>Hi, Welcome</h2>) : (<h2>Please login to view</h2>)}
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}


// export default function Home(props){
  
//   const layout = {
//     labelCol: {
//       span: 8,
//     },
//     wrapperCol: {
//       span: 16,
//     },
//   };
//   const tailLayout = {
//     wrapperCol: {
//       offset: 8,
//       span: 16,
//     },
//   };

//   const [Username,setUsername] = useState('');
//   const [Password, setPassword] = useState('');
//   const [Email, setEmail] = useState('');

//   function onRegister(e){
//     // e.preventDefault();
//     const postData = {
//       Username,
//       Password,
//       Email,
//     };

//     axios.post('http://localhost:36795/api/users', postData,).then(response => {
//       console.log(response);
//     });  
//   }

//   const onFinish = (values) => {
//     console.log('Success:', values);
//   };


//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   return (
//     <div>
//       <Form
//       {...layout}
//       name="basic"
//       onFinish={onRegister}
//       onSubmit={onRegister}
//       onFinishFailed={onFinishFailed}
//     >
//       <Form.Item
//         label="Username"
//         name="Username"
//         value={Username} 
//       >
//         <Input onChange={(e) => setUsername(e.target.value)}  />
//       </Form.Item>

//       <Form.Item
//         label="Password"
//         name="Password"
//         value={Password} 
//       >
//         <Input.Password onChange={(e) => setPassword(e.target.value)}  />
//       </Form.Item>
//       <Form.Item
//         name="Email"
//         label="Email"
//         value={Email} 
//       >
//         <Input onChange={(e) => setEmail(e.target.value)} />
//       </Form.Item>

//       <Form.Item {...tailLayout}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//     </div>
//   );

// }


// ------------------------------------

// export default function Home(props){

//   const [Username,setUsername] = useState('');
//   const [Password, setPassword] = useState('');
//   const [Email, setEmail] = useState('');

//   function onRegister(e){
//     e.preventDefault();
//     const postData = {
//       Username,
//       Password,
//       Email
//     };

//     axios.post('http://localhost:36795/api/users', postData,).then(response => {
//       console.log(response);
//     });  
//   }

//   return (
//     <div>
//       <form onSubmit={onRegister}>
//       <div className="formfield">
//         <label>Username</label>
//         <input 
//           type="text"
//           value={Username}
//           className="Username"
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Username"
//         />
//       </div>
//       <div className="formfield">
//         <label>Password</label>
//         <input 
//           type="text"
//           className="Password"
//           onChange={(e) => setPassword(e.target.value)}
//           value={Password}
//           placeholder="Password"
//         />
//       </div>
//       <div className="formfield">
//         <label>Email</label>
//         <input 
//           type="text"
//           className="Email"
//           onChange={(e) => setEmail(e.target.value)}
//           value={Email}
//           placeholder="Email"
//         />
//       </div>
//       <button type="submit" className="Register">Register</button>
//       </form>
//     </div>
//   );


// }



// export default function Home() {
//   const [state, setstate] = useState([]);
//   const [loading, setloading] = useState(true);
//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     await Axios.get("http://localhost:36795/events").then(
//       res => {
//         setloading(false);
//         setstate(
//           res.data.map(row => ({
//             Title: row.title,
//             Description: row.description,
//             id: row.id
//           }))
//         );
//       }
//     );
//   };

//   const columns = [
//     {
//       title: "Title",
//       dataIndex: "Title",
//       width: 150
//     },
//     {
//       title: "Description",
//       dataIndex: "Description",
//       width: 150
//     }
//   ];

//   return (
//     <div>
//       {loading ? (
//         "Loading"
//       ) : (
//         <Table
//           columns={columns}
//           dataSource={state}
//           pagination={{ pageSize: 50 }}
//           scroll={{ y: 240 }}
//         />
//       )}
//     </div>
//   );
// }




// import React from 'react';
// import {useAuth} from '../auth-context';
// import {DatePicker} from "antd";
// import "antd/dist/antd.css";

// export function Home(){
//     const {login} = useAuth();
    
//     return (
//       <div>
//         <h2>Home</h2>
//         <button onClick={login}>Login</button>
//       </div>
//     );
//   };


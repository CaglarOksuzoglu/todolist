import React, {useState} from 'react';
import "antd/dist/antd.css";
import axios from 'axios';
import { render } from '@testing-library/react';
import { Form, Input, Button, Checkbox } from 'antd';


//export default function Home(props){
  
 // const layout = {
 //   labelCol: {
 //     span: 6,
//    },
 //   wrapperCol: {
 //     span: 12,
 //   },
 // };
 // const tailLayout = {
  //  wrapperCol: {
  //    offset: 8,
  //    span: 16,
//    },
//  };

//  const [Username,setUsername] = useState('');
//  const [Password, setPassword] = useState('');
//  const [Email, setEmail] = useState('');

//  function onRegister(e){
    // e.preventDefault();
  //  const postData = {
  //    Username,
  //    Password,
  //    Email,
 //   };

 //   axios.post('http://localhost:36795/api/users', postData,).then(response => {
   //   console.log(response);
  //  });  
 // }

 // const onFinish = (values) => {
  //  console.log('Success:', values);
 // };


 // const onFinishFailed = (errorInfo) => {
   // console.log('Failed:', errorInfo);
  //};

  //return (
    //<div>
      //<Form
 //     {...layout}
 //     name="basic"
 //     onFinish={onRegister}
 //     onSubmit={onRegister}
 //     onFinishFailed={onFinishFailed}
 //   >
//      <Form.Item
  //      label="Username"
 //       name="Username"
 //       value={Username} 
  
 //  >*}
  
//      <Input onChange={(e) => setUsername(e.target.value)}  />
  
//    </Form.Item>

//
  
//    <Form.Item
  
//      label="Password"
  
//      name="Password"
  
//      value={Password} 
  
//    >
  
//      <Input.Password onChange={(e) => setPassword(e.target.value)}  />
  
//    </Form.Item>
  
//    <Form.Item
  
//      name="Email"
  
//      label="Email"
  
//      value={Email} 
  
//    >
  
//      <Input onChange={(e) => setEmail(e.target.value)} />
  
//    </Form.Item>

  
//    <Form.Item {...tailLayout}>
  
//      <Button type="primary" htmlType="submit">
  
//        Submit
  
//      </Button>
  
//    </Form.Item>
  
//  </Form>
  
//  </div>
  
//);


//}


// export default class About extends Component {
  

//   constructor(props){
//     super(props)

//     this.state = {
//       Username: this.Username,
//       Email: this.Email,
//       Password:this.Password,
//     }
//   }
//   changeHandler = (e) => {
//     this.setState({[e.target.name]: e.target.value})
//   }
  
//   submitHandler = e => {
//     e.preventDefault()
//     console.log(this.state)

//     axios.post('http://localhost:36795/api/users', this.state)
//     .then(response=> {
//       console.log(response)
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }

  
  
//   render()
//   {
//     const {Username, Email, Password} = this.state
    
//     return(
      
//       <div>
//         <form onSubmit={this.submitHandler}>
//           <h2>Register</h2>
//           <div className="form-group">
//             <label>Username</label>
//             <input type="text" name="Username" value={Username} className="form-control" placeholder="UserName" onChange={this.changeHandler}/>
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input type="text" name="Password" value={Password} className="form-control" placeholder="Password" onChange={this.changeHandler}/>
//           </div>
//           <div className="form-group">
//             <label>Email</label>
//             <input type="text" name="Email" value={Email} className="form-control" placeholder="Email" onChange={this.changeHandler}/>
//           </div>
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     )
//   }
// }




// export default class About extends Component{
//    handleSubmit = e => {
//     e.preventDefault();
//     const data = {
//       Username: this.Username,
//       Email: this.Email,
//       Password:this.Password,
//     }
//     console.log(data);

//     axios.post('http://localhost:36795/api/users', data, {headers:{"Content-Type" : "application/json"}})
//     .then(res => {
//         console.log(res)
//       })
//     .catch(
//         err => {console.log(err)}
//     )

//   };
//   render(){
//     return (
      // <form onSubmit={this.handleSubmit}>
      //   <h2>Register</h2>
      //   <div className="form-group">
      //     <label>Username</label>
      //     <input type="Username" className="form-control" placeholder="UserName" onChange={e=>this.Username = e.target.value}/>
      //   </div>
      //   <div className="form-group">
      //     <label>Password</label>
      //     <input type="Password" className="form-control" placeholder="Password" onChange={e=>this.Password = e.target.value}/>
      //   </div>
      //   <div className="form-group">
      //     <label>Email</label>
      //     <input type="Email" className="form-control" placeholder="Email" onChange={e=>this.Email = e.target.value}/>
      //   </div>
      //   <button>Sign Up</button>
      // </form>
//     );

//   }
//   }

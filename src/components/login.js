import React, {useState} from 'react';
import {useAuth} from '../auth-context';
import "antd/dist/antd.css";
import axios from 'axios';
import { Form, Input, Button, Checkbox } from 'antd';

export default function Login(){
     
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const [Username,setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Email, setEmail] = useState('');

  function onRegister(e){
    // e.preventDefault();
    const postData = {
      Username,
      Password,
      Email,
    };

    axios.post('http://localhost:36795/api/users', postData,).then(response => {
      console.log(response);
    });  
  }

  const onFinish = (values) => {
    console.log('Success:', values);
  };


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Form
      {...layout}
      name="basic"
      onFinish={onRegister}
      onSubmit={onRegister}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="Username"
        value={Username} 
      >
        <Input onChange={(e) => setUsername(e.target.value)}  />
      </Form.Item>

      <Form.Item
        label="Password"
        name="Password"
        value={Password} 
      >
        <Input.Password onChange={(e) => setPassword(e.target.value)}  />
      </Form.Item>
      <Form.Item
        name="Email"
        label="Email"
        value={Email} 
      >
        <Input onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );

  }
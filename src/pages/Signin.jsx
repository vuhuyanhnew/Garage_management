import { Button, Form, Input, notification } from 'antd';
import './css/Signin.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axiosInstance from '../services/axios.sevrice';
import { useState } from 'react';
const Signin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  console.log(from);
  const onFinish = async (values) => {
    try {
      setIsLoading(true);
      // call API
      const response = await axiosInstance.post('/auth/sign-in', values);

      // Luu token vao local storage
      localStorage.setItem('accessToken', response.data.data.accessToken);

      // thong bao login thanh cong
      notification.success({
        message: 'Login is successful',
      });
      const preLogoutPath = sessionStorage.getItem('preLogoutPath') || '/';
      navigate(preLogoutPath);
      sessionStorage.removeItem('preLogoutPath');
    } catch (error) {
      notification.error({
        message: error.response.data.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h3>Welcome</h3>
        <p>Log in to your account </p>
      </div>
      <Form layout="vertical" name="normal_login" className="login-form" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input type="password" placeholder="Enter password" />
        </Form.Item>
        <Form.Item>
          <Link className="login-form-forgot" to="/forgot">
            Forgot password
          </Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" block loading={isLoading}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Signin;

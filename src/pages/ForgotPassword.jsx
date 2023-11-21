import { Button, Form, Input, notification } from 'antd';
import './css/Signin.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../services/axios.sevrice';
const Forgot = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async (values) => {
    try {
      setIsLoading(true);
      // call API
      const response = await axiosInstance.post('/auth/forgot-password', values);

      // dieu huong den reset
      navigate(`/reset?token=${response.data.data}`);
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
        <h3>Forgot password</h3>
      </div>
      <Form
        layout="vertical"
        name="normal_forgot"
        className="forgot-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
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

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" block loading={isLoading}>
            Continue
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Forgot;

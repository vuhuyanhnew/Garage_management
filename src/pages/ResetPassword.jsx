import { Button, Form, Input, notification } from 'antd';
import './css/Signin.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axiosInstance from '../services/axios.sevrice';
import { useState } from 'react';
const Reset = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const token = searchParams.get('token');

  const onFinish = async (values) => {
    try {
      setIsLoading(true);
      // call API
      await axiosInstance.put('/auth/reset-password', { ...values, token });

      // thong bao login thanh cong
      notification.success({
        message: 'Reset is successful',
      });

      // dieu huong den login
      navigate(`/signin`);
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
        <h3>Reset password</h3>
      </div>
      <Form
        name="dependencies"
        autoComplete="off"
        style={{ maxWidth: 600 }}
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The confirm password that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" block loading={isLoading}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Reset;

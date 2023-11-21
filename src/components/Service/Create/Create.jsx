import { Alert, Button, Form, Input, Row, Space, notification } from 'antd';
import { Col } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewService } from '../../../Store/reducers/service';

const CreateService = () => {
  const [formData, setFormData] = useState({
    name: 'string',
    description: 'string',
    minPrice: 0,
    maxPrice: 0,
  });
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [isFormValid, setIsFormValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  useEffect(() => {
    form
      .validateFields()
      .then(() => {
        setIsFormValid(true);
        setShowAlert(false);
      })
      .catch(() => {
        setIsFormValid(false);
        setShowAlert(true);
      });
  }, [form]);

  const handleSubmit = () => {
    setIsSubmited(true);
    form
      .validateFields()
      .then((values) => {
        const formattedValues = {
          ...values,
          minPrice: parseInt(values.minPrice, 10),
          maxPrice: parseInt(values.maxPrice, 10),
        };

        dispatch(createNewService(formattedValues))
          .unwrap()
          .then((result) => {
            setShowAlert(false);
            setIsSubmited(false);
            notification.success({
              message: 'Successfull',
              description: 'The service has been created successfully !',
              placement: 'topLeft',
            });

            setTimeout(() => {
              window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            }, 3000);
          })
          .catch((error) => {
            console.error('Lỗi khi tạo dịch vụ', error);
            setShowAlert(true);
          });
      })
      .catch((error) => {
        setShowAlert(true);
        console.error('Lỗi khi xác thực biểu mẫu', error);
      });
  };

  const handleFormReset = () => {
    form.resetFields();
    setIsSubmited(false);
    setShowAlert(false);
  };
  const validateNumber = async (rule, value) => {
    if (value === '') {
      return;
    } else if (isNaN(value)) {
      throw new Error('Please enter a valid number');
    }
  };

  return (
    <>
      {showAlert && isSubmited && (
        <Alert
          message="Error"
          description="Please fill in the form correctly."
          type="error"
          showIcon
          closable
          onClose={() => setShowAlert(false)}
        />
      )}
      <div>
        <div>
          <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                  <Input placeholder="Enter your name" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={6}>
                <Form.Item
                  name="minPrice"
                  label="Min price"
                  rules={[{ required: true, message: 'Please enter the maximum price' }, { validator: validateNumber }]}
                >
                  <Input placeholder="Enter min price" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={6}>
                <Form.Item
                  name="maxPrice"
                  label="Max price"
                  rules={[{ required: true, message: 'Please enter the maximum price' }, { validator: validateNumber }]}
                >
                  <Input placeholder="Enter max price" />
                </Form.Item>
              </Col>
            </Row>
            <div>
              <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                <Input.TextArea autoSize={{ minRows: 5, maxRows: 10 }} placeholder="Description" />
              </Form.Item>
            </div>
          </Form>

          <Space>
            <Button type="primary" htmlType="button" onClick={handleSubmit}>
              Create
            </Button>
            <Button type="default" onClick={handleFormReset}>
              Reset
            </Button>
          </Space>
        </div>
      </div>
    </>
  );
};
export default CreateService;

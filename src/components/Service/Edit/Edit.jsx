/* eslint-disable react/prop-types */
import { Button, Col, Form, Input, Row, Select, Space, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices, fetchServicesById, updateService } from '../../../Store/reducers/service';
import { useNavigate, useParams } from 'react-router-dom';

const EditService = () => {
  const dispatch = useDispatch();
  const { serviceByIdData } = useSelector((state) => state.service);
  const navigate = useNavigate();

  const params = useParams();
  const paramId = 'c6392d0c-c07b-4e57-b0ee-e14919c0282e';
  useEffect(() => {
    dispatch(fetchServicesById(paramId));
  }, [dispatch, paramId]);
  console.log(serviceByIdData);
  const [form] = Form.useForm();

  const SubmitButton = ({ form }) => {
    const values = Form.useWatch([], form);
    React.useEffect(() => {}, [values, formSubmitted]);

    return (
      <Space>
        <Button type="primary" htmlType="button" onClick={handleSubmit}>
          Edit
        </Button>
      </Space>
    );
  };
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = () => {
    setFormSubmitted(true);
    form
      .validateFields()
      .then((values) => {
        const formattedValues = {
          ...values,
        };
        dispatch(updateService({ id: paramId, data: formattedValues }))
          .unwrap()
          .then((result) => {
            notification.success({
              message: 'Success',
              description: 'Service updated successfully!',
            });
            setTimeout(() => {
              window.location.href = `/detailservice/${paramId}`;
            }, 3000);
          })
          .catch((error) => {
            console.error('Error while updating service:', error);
          });
      })
      .catch((error) => {
        console.error('Form validation error:', error);
      });
  };
  useEffect(() => {
    if (serviceByIdData) {
      form.setFieldsValue({
        ...serviceByIdData,
        minPrice: serviceByIdData.minPrice.toString(),
        maxPrice: serviceByIdData.maxPrice.toString(),
      });
    }
  }, [serviceByIdData, form]);

  const validateNumber = async (_, value) => {
    if (value === '') {
      return Promise.resolve();
    }
    if (isNaN(value)) {
      return Promise.reject(new Error('Please enter a valid number'));
    }
    return Promise.resolve();
  };

  return (
    <>
      <div>
        <div>
          <Form
            form={form}
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
            initialValues={{
              name: serviceByIdData?.name,
              minPrice: serviceByIdData?.minPrice,
              maxPrice: serviceByIdData?.maxPrice,
              description: serviceByIdData?.description,
            }}
          >
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                  <Input placeholder="Enter your name" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={6}>
                <Form.Item
                  name="min"
                  label="Min price"
                  rules={[{ required: true, message: 'Please enter the maximum price' }, { validator: validateNumber }]}
                >
                  <Input placeholder="Enter min price" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={6}>
                <Form.Item
                  name="max"
                  label="Max price"
                  rules={[{ required: true, message: 'Please enter the maximum price' }, { validator: validateNumber }]}
                >
                  <Input placeholder="Enter max price" />
                </Form.Item>
              </Col>
            </Row>
            <div>
              <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                <Input.TextArea autoSize={{ minRows: 5, maxRows: 10 }} placeholder="Enter your name" />
              </Form.Item>
            </div>
          </Form>
          <SubmitButton form={form} />
        </div>
      </div>
    </>
  );
};

export default EditService;

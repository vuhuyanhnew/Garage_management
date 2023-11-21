/* eslint-disable react/prop-types */
import { Button, Card, Checkbox, Col, DatePicker, Form, Input, Row, Select, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewOwner } from '../../../Store/reducers/owner';
import { fetchGarage } from '../../../Store/reducers/garage';

import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
const CreateOwner = ({ value }) => {
  const params = [];
  const [form] = Form.useForm();
  const dateFormat = 'YYYY/MM/DD';

  const [formSubmitted, setFormSubmitted] = useState(false);

  const dispatch = useDispatch();
  const { manageGarage } = useSelector((state) => state.garage);
  useEffect(() => {
    dispatch(fetchGarage(params));
  }, []);
  console.log('123123', manageGarage);

  const allGarages = ['Garage 1', 'Garage 2', 'Garage 3', 'Garage 4', 'Garage 5'];
  const [filterValue, setFilterValue] = useState('');
  const filteredGarages = allGarages.filter((garage) => garage.includes(filterValue));

  const handleInputChange = (e) => {
    setFilterValue(e.target.value);
  };

  const SubmitButton = ({ form }) => {
    const values = Form.useWatch([], form);
    React.useEffect(() => {}, [values, formSubmitted]);
    return (
      <Space>
        <Button type="primary" htmlType="button" onClick={handleSubmit}>
          Save
        </Button>
      </Space>
    );
  };

  const handleSubmit = () => {
    setFormSubmitted(true);
    form
      .validateFields()
      .then((values) => {
        const formattedValues = {
          ...values,
          dob: dayjs(values.dob).format('YYYY-MM-DD'),
        };
        dispatch(createNewOwner(formattedValues))
          .unwrap()
          .then((result) => {
            console.log('Owner created successfully', result);
          })
          .catch((error) => {
            console.error('Error while creating owner:', values);
          });
      })
      .catch((error) => {
        console.error('Form validation error:', value);
      });
  };

  return (
    <>
      <div>
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          initialValues={{
            fullName: '',
            email: '',
            password: '',
            phoneNumber: '',
            gender: 'Gender',
            dob: dayjs('1990-01-01'),
            role: 'Role',
            garageIds: ['5fc89ad7-28b1-4c36-b79e-a7704edf2e2a'],
          }}
        >
          <Row gutter={[16, 34]}>
            <Col className="gutter-row" span={5}>
              <Form.Item name="fullName" label="Name" rules={[{ required: true }]}>
                <Input
                  style={{
                    width: '80%',
                  }}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={5}>
              <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                <Input
                  style={{
                    width: '80%',
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 34]}>
            <Col className="gutter-row" span={5}>
              <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                <Input
                  style={{
                    width: '80%',
                  }}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={5}>
              <Form.Item name="phoneNumber" label="Phone Number" rules={[{ required: true }]}>
                <Input
                  style={{
                    width: '80%',
                  }}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={5}>
              <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                <Select className="select-content" style={{ width: '80%' }}>
                  <Select.Option value="MALE">Male</Select.Option>
                  <Select.Option value="FEMALE">Female</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={5}>
              <Form.Item name="dob" label="DOB" rules={[{ required: true }]}>
                <DatePicker
                  format={dateFormat}
                  style={{
                    width: '80%',
                  }}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={5}>
              <Form.Item name="role" label="Role" rules={[{ required: true }]}>
                <Select
                  className="select-content"
                  style={{
                    width: '80%',
                  }}
                >
                  <Select.Option value="USER">User</Select.Option>
                  <Select.Option value="ADMIN">Admin</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={8}>
              <Card>
                <Input placeholder="Enter garage name" onChange={handleInputChange} value={filterValue} />
                <Form.Item name="garageIds" label="Garage">
                  <Checkbox.Group>
                    {filteredGarages.map((garage) => (
                      <div key={garage}>
                        <Checkbox value={garage}>{garage}</Checkbox>
                      </div>
                    ))}
                  </Checkbox.Group>
                </Form.Item>
              </Card>
            </Col>
          </Row>
        </Form>
        <SubmitButton form={form} />
        <Link to={'/owner'}>
          <Button>Cancel</Button>
        </Link>
      </div>
    </>
  );
};
export default CreateOwner;

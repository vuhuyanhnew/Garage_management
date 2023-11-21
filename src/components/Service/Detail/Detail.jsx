/* eslint-disable react/prop-types */
import { Button, Col, Form, Row, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchServicesById } from '../../../Store/reducers/service';

const DetailService = () => {
  const dispatch = useDispatch();
  const { serviceByIdData } = useSelector((state) => state.service);
  const navigate = useNavigate();

  const params = useParams();
  const paramId = 'c6392d0c-c07b-4e57-b0ee-e14919c0282e';
  useEffect(() => {
    dispatch(fetchServicesById(paramId));
  }, [dispatch, paramId]);

  const [form] = Form.useForm();

  const handleEdit = () => {
    navigate(`/editservice/${paramId}`);
  };

  return (
    <>
      <div>
        <div>
          <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <Form.Item name="name" label="Name">
                  <div>{serviceByIdData?.name}</div>
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={6}>
                <Form.Item name="min" label="Min price">
                  <div>{serviceByIdData?.minPrice}</div>
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={6}>
                <Form.Item name="max" label="Max price">
                  <div>{serviceByIdData?.maxPrice}</div>
                </Form.Item>
              </Col>
            </Row>
            <div>
              <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                <div>{serviceByIdData?.description}</div>
              </Form.Item>
            </div>
          </Form>
          <Button type="primary" onClick={handleEdit}>
            Edit
          </Button>
          <Button>Delete</Button>
        </div>
      </div>
    </>
  );
};

export default DetailService;

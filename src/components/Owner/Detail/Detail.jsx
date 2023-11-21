/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import { Button, Card, Col, Row, Space } from 'antd';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchOwnersById } from '../../../Store/reducers/owner';
import { useDispatch, useSelector } from 'react-redux';
import './Detail.css';

const DetailOwner = () => {
  const dispatch = useDispatch();
  const { userByIdData } = useSelector((state) => state.owner);
  const navigate = useNavigate();

  const params = useParams();
  useEffect(() => {
    dispatch(fetchOwnersById(params.id));
  }, [dispatch, params.id]);

  const handleEdit = () => {
    navigate(`/editowner/${params.id}`);
  };
  return (
    <div className="detail-container">
      <Row gutter={[16, 24]}>
        <Col span={24}>
          <Card title="Infomation" bordered={false}>
            <Row gutter={[16, 24]}>
              <Col span={12}>
                <div className="detail-label">Name:</div>
                <div className="detail-value">{userByIdData?.fullName}</div>
              </Col>
              <Col span={12}>
                <div className="detail-label">Email:</div>
                <div className="detail-value">{userByIdData?.email}</div>
              </Col>
            </Row>
            <Row gutter={[16, 24]}>
              <Col span={12}>
                <div className="detail-label">Date of Birth:</div>
                <div className="detail-value">{userByIdData?.dob}</div>
              </Col>
              <Col span={12}>
                <div className="detail-label">Phone Number:</div>
                <div className="detail-value">{userByIdData?.phoneNumber}</div>
              </Col>
            </Row>
            <Row gutter={[16, 24]}>
              <Col span={12}>
                <div className="detail-label">Gender:</div>
                <div className="detail-value">{userByIdData?.gender}</div>
              </Col>
              <Col span={12}>
                <div className="detail-label">Role:</div>
                <div className="detail-value">{userByIdData?.role}</div>
              </Col>
            </Row>
            <Row gutter={[16, 24]}>
              <Col span={24}>
                <div className="detail-label">Garage:</div>
                <Link to={userByIdData?.garageIds}>{userByIdData?.garageIds}</Link>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Space style={{ marginTop: 20 }}>
        <Button type="primary" onClick={handleEdit}>
          Edit
        </Button>

        <Button type="danger">Delete</Button>
      </Space>
    </div>
  );
};

export default DetailOwner;

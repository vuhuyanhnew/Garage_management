import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Space, Dropdown, Avatar } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onLogout = () => {
    sessionStorage.setItem('preLogoutPath', window.location.pathname);
    localStorage.removeItem('accessToken');
    navigate('/signin');
  };
  const toProfile = () => {
    navigate('/mypo');
  };

  const items = [
    {
      key: '1',
      label: <div onClick={toProfile}>Profile</div>,
    },
    {
      key: '2',
      label: <div onClick={onLogout}>Logout</div>,
    },
  ];
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'User',
              onClick: () => navigate('owner'),
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Garage',
              onClick: () => navigate('garages'),
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Service',
              onClick: () => navigate('createservice'),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div
            style={{
              float: 'right',
            }}
          >
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Avatar shape="square" size="medium" icon={<UserOutlined />} />
                </Space>
              </a>
            </Dropdown>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;

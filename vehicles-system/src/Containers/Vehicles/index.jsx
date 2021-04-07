import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import Logo from '../../Assets/images/logo.svg';
import './styles.scss';
import Sidebar from '../../Components/Sidebar';

const Vehicles = () => {
  const { Header, Sider, Content } = Layout;
  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </Header>
      <Layout>
        <Sider className="site-layout-background sider-container">
          <Sidebar />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Vehicles;

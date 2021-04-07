import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import './styles.scss';
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
const Vehicles = () => {
  const { Content } = Layout;
  return (
    <Layout>
      <Header />
      <Layout>
        <Sidebar />
        <Layout style={{ padding: '0 20px 20px 65px' }}>
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

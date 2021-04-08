import React from 'react';
import { Layout } from 'antd';
import './styles.scss';
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import History from '../../Components/History';
const Vehicles = () => {
  const { Content } = Layout;
  return (
    <Layout>
      <Header />
      <Layout>
        <Sidebar />
        <Layout className="history-layout">
          <Content className="site-layout-background content-container">
            <History />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Vehicles;

import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../../Components/Sidebar';
import './styles.scss';

const Vehicles = () => {
    const { Header, Sider, Content } = Layout;
    return (
        <Layout>
        <Sider>
          <Sidebar />
        </Sider>
        <Layout>
          <Header>
          </Header>
          <Content>Content</Content>
        </Layout>
      </Layout>
    )
}

export default Vehicles;
import React from 'react';
import './styles.scss';
import { Layout, Menu } from 'antd';
import { UserOutlined, CarOutlined, FileTextOutlined } from '@ant-design/icons';

const Sidebar = () => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  return (
    <Sider className="site-layout-background sider-container">
      <Menu
        mode="inline"
        defaultSelectedKeys={['3']}
        defaultOpenKeys={['sub1']}
        className="side-menu"
      >
        <Menu.Item key="1" icon={<CarOutlined />}>
          VEHICLE
        </Menu.Item>
        <SubMenu key="sub1" icon={<FileTextOutlined />} title="REPORT">
          <Menu.Item key="2">Operating Cost</Menu.Item>
          <Menu.Item key="3">Fuel History</Menu.Item>
          <Menu.Item key="4">Total Cost</Menu.Item>
          <Menu.Item key="5">Cost/Meter</Menu.Item>
          <Menu.Item key="6">Expesne Summary</Menu.Item>
          <Menu.Item key="7">Utilization</Menu.Item>
          <Menu.Item key="8">Maintenance</Menu.Item>
          <Menu.Item key="9">Service</Menu.Item>
        </SubMenu>
        <Menu.Item key="10" icon={<UserOutlined />}>
          PEAPLE
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;

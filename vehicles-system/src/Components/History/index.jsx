import React from 'react';
import './styles.scss';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Flag from '../../Assets/images/eg-flag.png';
import { Table, Space } from 'antd';
import Edit from '../../Assets/images/edit.svg';
import Delete from '../../Assets/images/delete.svg';
import Car from '../../Assets/images/car.png';
// import Data from '../../Constants/tableData.json';

const History = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Date</Menu.Item>
      <Menu.Item key="2">Status</Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: 'Vehicle',
      dataIndex: 'name',
      key: 'name',
      width: 500,
      render: (text) => (
        <div>
          <img src={Car} alt="car" className="car-img" />
          <div className="vehicle-details">
            <span className="vehicle-name">{text}</span>
            <span className="vehicle-status">Active</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      width: 200,
    },
    {
      title: 'Total km',
      dataIndex: 'total',
      key: 'total',
      width: 200,
    },
    {
      title: 'Volume',
      dataIndex: 'volume',
      key: 'volume',
      width: 200,
    },
    {
      title: 'Cost',
      dataIndex: 'cost',
      key: 'cost',
      width: 200,
      render: (text) => (
        <div>
          <div className="vehicle-details">
            <span>{text}</span>
            <span className="font-sm">Rp 10,200/ltr</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Actions',
      key: 'action',
      render: () => (
        <Space size="small">
          <Button type="text">
            <img src={Edit} alt="logo" />
          </Button>
          <Button type="text">
            <img src={Delete} alt="logo" />
          </Button>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: '[001] Toyota Avanza',
      time: '10:34 AM',
      total: 'Rp 950.000',
      volume: '123.14 L',
      cost: 'Active',
    },
    {
      key: '2',
      name: '[005] Daihatsu Xenia',
      time: '09:34 PM',
      total: 'Rp 950.000',
      volume: '123.14 L',
      cost: ['loser'],
    },
    {
      key: '3',
      name: '[001] Toyota Avanza',
      time: '10:23 AM',
      total: 'Rp 950.000',
      volume: '123.14 L',
      cost: ['cool', 'teacher'],
    },
    {
      key: '4',
      name: '[001] Toyota Avanza',
      time: '09:34 PM',
      total: 'Rp 950.000',
      volume: '123.14 L',
      cost: ['cool', 'teacher'],
    },
    {
      key: '5',
      name: '[005] Daihatsu Xenia',
      time: '09:34 PM',
      total: 'Rp 950.000',
      volume: '123.14 L',
      cost: ['cool', 'teacher'],
    },
  ];
  return (
    <>
      <div className="filters-wrapper">
        <Dropdown overlay={menu}>
          <Button className="sort-btn">
            <span className="grey-text">Sort: </span>
            <span className="primary-text"> Date</span> <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown overlay={menu}>
          <Button>
            <span className="grey-text">Timezone: </span>
            <span className="primary-text">
              <img src={Flag} alt="egypt flag" />
            </span>
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default History;

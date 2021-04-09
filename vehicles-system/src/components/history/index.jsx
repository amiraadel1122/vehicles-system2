import React, { useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Flag from '../../assets/images/eg-flag.png';
import { Table, Space } from 'antd';
import Edit from '../../assets/images/edit.svg';
import Delete from '../../assets/images/delete.svg';
import Car from '../../assets/images/car.png';
import Dialog from '../dialog';
import Data from '../../constants/tableData.json';
import './styles.scss';

const History = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);
  const [tableData, setTableData] = useState(Data);

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
      key: 'cost',
      width: 200,
      render: ({ cost, fuel }) => (
        <div>
          <div className="vehicle-details">
            <span>{cost}</span>
            <span className="font-sm">{fuel}</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Actions',
      key: 'action',
      render: ({ key }) => (
        <Space size="small">
          <Button
            type="text"
            onClick={() => {
              setSelectedKey(key);
              setIsModalOpen(true);
            }}
          >
            <img src={Edit} alt="logo" />
          </Button>
          <Button type="text" onClick={() => handleDeleteAction(key)}>
            <img src={Delete} alt="logo" />
          </Button>
        </Space>
      ),
    },
  ];

  const modelCancel = () => setIsModalOpen(false);

  const handleEditAction = (data) => {
    const clonedData = [...tableData];
    const itemIndex = clonedData.findIndex((item) => item.key === data.key);
    if (itemIndex >= 0) {
      clonedData[itemIndex] = data;
      setTableData(clonedData);
      modelCancel();
    }
  };

  const handleDeleteAction = (id) => {
    const clonedData = [...tableData];
    const itemIndex = clonedData.findIndex((item) => item.key === id);
    if (itemIndex >= 0) {
      clonedData.splice(itemIndex, 1);
      setTableData(clonedData);
    }
  };
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
      <Table columns={columns} dataSource={tableData} />
      <Dialog
        selectedKey={selectedKey}
        isModalOpen={isModalOpen}
        closeModal={modelCancel}
        handleEditAction={handleEditAction}
      />
    </>
  );
};

export default History;

import React, { useState } from 'react';
import {
  Modal,
  Button,
  Form,
  InputNumber,
  Dropdown,
  Menu,
  DatePicker,
} from 'antd';
import { Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import moment from 'moment';
import './styles.scss';

const Dialog = ({ isModalOpen, closeModal, selectedKey, handleEditAction }) => {
  const dateFormat = 'DD/MM/YYYY';

  const [selectedVehicle, setSelectedVehicle] = useState(
    'Toyota Prius (A-41082)'
  );
  const [selectedDate, setSelectedDate] = useState(
    moment('01/01/2015').format(dateFormat)
  );
  const [odometer, setOdometer] = useState(null);
  const [volume, setVolume] = useState(null);
  const [selectedFuel, setSelectedFuel] = useState('Toyota Prius (A-41082)');

  const [form] = Form.useForm();
  const menuVehicle = (
    <Menu onClick={(e) => setSelectedVehicle(e.key)}>
      <Menu.Item key="Toyota Prius (A-41082)">Toyota Prius (A-41082)</Menu.Item>
      <Menu.Item key="Toyota Prius (B-41082)">Toyota Prius (B-41082)</Menu.Item>
      <Menu.Item key="Toyota Prius (C-41082)">Toyota Prius (C-41082)</Menu.Item>
    </Menu>
  );

  const menuFuel = (
    <Menu onClick={(e) => setSelectedFuel(e.key)}>
      <Menu.Item key="Toyota Prius (A-41082)">Toyota Prius (A-41082)</Menu.Item>
      <Menu.Item key="Toyota Prius (B-41082)">Toyota Prius (B-41082)</Menu.Item>
      <Menu.Item key="Toyota Prius (C-41082)">Toyota Prius (C-41082)</Menu.Item>
    </Menu>
  );

  const handleOk = () => {
    const newData = {
      key: selectedKey,
      name: selectedVehicle,
      time: selectedDate,
      total: `Rp ${odometer}`,
      volume: `${volume} L`,
      fuel: selectedFuel,
      cost: 'Active',
    };

    setSelectedVehicle('Toyota Prius (A-41082)');
    setSelectedDate(moment('01/01/2015', dateFormat));
    setOdometer(null);
    setVolume(null);
    setSelectedFuel('Toyota Prius (A-41082)');
    handleEditAction(newData);
  };

  const handleCancel = () => closeModal();

  return (
    <Modal
      title="Edit Fuel Entry"
      visible={isModalOpen}
      okText="Save"
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} layout="vertical">
        <Row>
          <Col span={24}>
            <Form.Item
              label="Vehicle"
              rules={[
                {
                  required: true,
                  message: 'Please select a vehicle!',
                },
              ]}
            >
              <Dropdown overlay={menuVehicle} trigger={['click']}>
                <Button className="ant-dropdown-link">
                  <p>{selectedVehicle}</p> <DownOutlined />
                </Button>
              </Dropdown>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Start Date"
              rules={[
                {
                  required: true,
                  message: 'Please enter a date!',
                },
              ]}
            >
              <DatePicker
                defaultValue={moment('01/01/2015', dateFormat)}
                format={dateFormat}
                onChange={(e) => setSelectedDate(moment(e).format(dateFormat))}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Odometer"
              rules={[
                {
                  required: true,
                  message: 'Please enter odometer!',
                },
              ]}
            >
              <InputNumber
                min={1}
                stringMode
                onChange={(e) => setOdometer(e)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Volume"
              rules={[
                {
                  required: true,
                  message: 'Please enter a volume!',
                },
              ]}
            >
              <InputNumber min={1} onChange={(e) => setVolume(e)} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Fuel Type (optional)">
              <Dropdown overlay={menuFuel} trigger={['click']}>
                <Button className="ant-dropdown-link">
                  <p>{selectedFuel}</p> <DownOutlined />
                </Button>
              </Dropdown>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default Dialog;

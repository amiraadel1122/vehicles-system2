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

const Dialog = () => {
  const [form] = Form.useForm();
  const menu = (
    <Menu>
      <Menu.Item key="0">Toyota Prius (B-41082)</Menu.Item>
      <Menu.Item key="1">Toyota Prius (B-41082)</Menu.Item>
      <Menu.Item key="3">Toyota Prius (B-41082)</Menu.Item>
    </Menu>
  );
  const dateFormat = 'DD/MM/YYYY';
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Edit Fuel Entry"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Row>
            <Col span={24}>
              <Form.Item label="Vehicle">
                <Dropdown overlay={menu} trigger={['click']}>
                  <Button
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <p>Toyota Prius (B-41082)</p> <DownOutlined />
                  </Button>
                </Dropdown>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Start Date">
                <DatePicker
                  defaultValue={moment('01/01/2015', dateFormat)}
                  format={dateFormat}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Odometer">
                <InputNumber min={1} stringMode />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Volume">
                <InputNumber min={1} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Fuel Type (optional)">
                <Dropdown overlay={menu} trigger={['click']}>
                  <Button
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <p>Toyota Prius (B-41082)</p> <DownOutlined />
                  </Button>
                </Dropdown>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default Dialog;

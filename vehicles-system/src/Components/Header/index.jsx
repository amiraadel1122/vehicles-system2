import React from 'react';
import './styles.scss';
import Logo from '../../assets/images/logo.svg';
import User from '../../assets/images/user.png';
import { Layout } from 'antd';

const Header = () => {
  const { Header } = Layout;
  return (
    <Header className="header">
      <div className="user-img">
        <img src={User} alt="User" />
      </div>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="title">PLN Asset Management System</div>
    </Header>
  );
};

export default Header;

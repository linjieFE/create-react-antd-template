import React, { Component } from "react";
import { Menu, Dropdown, Icon, Layout, Avatar, Badge, Popover } from "antd";
import Logo from "../assets/images/logo.png";

const { Header } = Layout;

class AppHeader extends Component {
  state = {
    Logo
  };
  render() {
    let { menuClick, avatar, menuToggle, show } = this.props;
    const menu = (
      <Menu>
        <Menu.ItemGroup title="用户设置">
          <Menu.Divider />
          <Menu.Item>
            <Icon type="edit" />
            个人设置
          </Menu.Item>
          <Menu.Item>
            <Icon type="setting" theme="filled" />
            系统设置
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.Divider />
        <Menu.Item>
          <span>
            <Icon type="logout" /> 退出登录
          </span>
        </Menu.Item>
      </Menu>
    );
    return (
      <Header className="header">
        <div className="left">
          <Icon
            style={{ fontSize: "2rem" }}
            onClick={menuClick}
            type={menuToggle ? "menu-unfold" : "menu-fold"}
          />
        </div>
        <div className="right">
          <div className="mr15">
            <Popover
              placement="bottomRight"
              title={"通知"}
              content={""}
              trigger="click"
            >
              <Badge dot={show} offset={[-2, 0]}>
                <a href="./" style={{ color: "#000" }}>
                  <Icon type="bell" />
                </a>
              </Badge>
            </Popover>
          </div>
          <div>
            <Dropdown overlay={menu} overlayStyle={{ width: "20rem" }}>
              <div className="ant-dropdown-link">
                <Avatar
                  icon="user"
                  src={avatar}
                  alt="avatar"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </Dropdown>
          </div>
        </div>
      </Header>
    );
  }
}

export default AppHeader;

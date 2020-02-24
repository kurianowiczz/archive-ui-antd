import React from 'react';
import { Layout as AntLayout, Menu as AntMenu, Icon, Button } from 'antd';

import styles from './Menu.module.css';
import { menu } from '../../../../constants/routes';
import { Link } from 'react-router-dom';

const { Sider } = AntLayout;
const { Item } = AntMenu;

interface IMenuProps {
    collapsed: boolean;
    toggleCollapsed: () => void;
}

const Menu: React.FC<IMenuProps> = ({ collapsed, toggleCollapsed }) => {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed} className={collapsed ? styles.collapsedSlider : styles.slider}>
          <Button onClick={toggleCollapsed} type='link' className={styles.btn}>
            <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
            />
            {
                !collapsed && 'Collapse'
            }
          </Button>
          <AntMenu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
            {
              menu.map((el) => (
                <Item key={el.path}>
                  <Link to={el.path}>
                    <Icon type={el.icon}/>
                    <span>{el.label}</span>
                  </Link>
                </Item>
              ))
            }
            {/* <Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Item>
            <Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Item>
            <Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Item> */}
          </AntMenu>
        </Sider>
    );
};

export default Menu;

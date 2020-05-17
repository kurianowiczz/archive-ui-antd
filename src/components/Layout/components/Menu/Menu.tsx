import React from 'react';
import { Layout as AntLayout, Menu as AntMenu, Icon, Button } from 'antd';

import styles from './Menu.module.css';
import { menu } from '../../../../constants/routes';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { IGlobalState } from "../../../../store";

const { Sider } = AntLayout;
const { Item } = AntMenu;

interface IMenuProps {
    collapsed: boolean;
    toggleCollapsed: () => void;
}

const Menu: React.FC<IMenuProps> = ({ collapsed, toggleCollapsed }) => {
    const user = useSelector((state: IGlobalState) => state.users.user);
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
              !!user && menu.map((el) => el.roles.includes(user.role) ? (
                <Item key={el.path}>
                  <Link to={el.path}>
                    <Icon type={el.icon}/>
                    <span>{el.label}</span>
                  </Link>
                </Item>
              ) : null)
            }
          </AntMenu>
        </Sider>
    );
};

export default Menu;

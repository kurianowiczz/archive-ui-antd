import React from "react";
import { Layout as AntLayout, Avatar, Badge } from 'antd';

import styles from './Header.module.css';

const { Header: AntHeader } = AntLayout;

const Header: React.FC = () => {

    return (
        <AntHeader className={styles.header}>
            <span>Logo</span>
            <Badge dot>
                <Avatar shape="square" icon="user" />
            </Badge>
        </AntHeader>
    )
};

export default Header;

import React, { useCallback, useState } from "react";
import { Layout as AntLayout } from 'antd';

import styles from './Layout.module.css';
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";

const { Content } = AntLayout;

const Layout: React.FC = ({ children }) => {

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = useCallback(() => {
        setCollapsed(!collapsed)
    }, [collapsed]);


    return (
    <AntLayout className={styles.page}>
        <Menu collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        <AntLayout>
            <Header />
            <Content
                style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
                }}
            >
                {children}
            </Content>
        </AntLayout>
      </AntLayout>
    );
}

export default Layout;
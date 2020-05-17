import React, {useCallback, useMemo} from 'react';
import { Layout as AntLayout, Avatar, Badge, Popover } from 'antd';

import styles from './Header.module.css';
import {Link} from 'react-router-dom';
import Routes from '../../../../constants/routes';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../../store/users/actions';
import {history} from '../../../../router';
import logo from '../../../../assets/upload-cloud.png';

const { Header: AntHeader } = AntLayout;

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const onLogOutClick = useCallback(() => {
        localStorage.setItem('token', '');
        dispatch(logOut());
        history.push('/');
    }, [dispatch]);
    const popoverContent = useMemo(() => {
        return (
            <div>
                <Link to={Routes.ACCOUNT.path}>
                    <p>Profile</p>
                </Link>
                <p onClick={onLogOutClick} style={{ cursor: 'pointer', color: '#1890ff' }}>Log Out</p>
            </div>
        );
    }, [onLogOutClick]);
    return (
        <AntHeader className={styles.header}>
            <span style={{ display: 'grid', gridTemplateColumns: 'max-content max-content', alignItems: 'center' }}>
                <img src={logo} alt={'Logo'} width={40} />
                <h1 style={{ paddingLeft: 20, color: '#1890ff', margin: 0 }}>File Uploader</h1>
            </span>
            <Badge dot>
                <Popover trigger={'click'} title={'Settings'} content={popoverContent} placement={'rightBottom'}>
                    <Avatar style={{cursor: 'pointer'}} shape="square" icon="user" />
                </Popover>
            </Badge>
        </AntHeader>
    )
};

export default Header;

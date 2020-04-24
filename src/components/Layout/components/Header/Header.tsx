import React, {useCallback, useMemo} from 'react';
import { Layout as AntLayout, Avatar, Badge, Popover } from 'antd';

import styles from './Header.module.css';
import {Link} from 'react-router-dom';
import Routes from '../../../../constants/routes';
import {useDispatch, useSelector} from 'react-redux';
import {IGlobalState} from '../../../../store';
import { logOut } from '../../../../store/users/actions';
import {history} from '../../../../router';

const { Header: AntHeader } = AntLayout;

const Header: React.FC = () => {
    const user = useSelector((state: IGlobalState) => state.users.user);
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
                <p onClick={onLogOutClick}>Log Out</p>
            </div>
        );
    }, []);
    return (
        <AntHeader className={styles.header}>
            <span>Logo</span>
            <Badge dot>
                <Popover trigger={'click'} title={'Settings'} content={popoverContent} placement={'rightBottom'}>
                    <Avatar style={{cursor: 'pointer'}} shape="square" icon="user" />
                </Popover>
            </Badge>
        </AntHeader>
    )
};

export default Header;

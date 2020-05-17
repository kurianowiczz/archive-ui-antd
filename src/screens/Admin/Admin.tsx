import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import IUser from "../../interfaces/IUser";
import { getAll, toggleBan } from "../../api/users";
import { Switch } from 'antd';

const Admin: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const refetch = () => {
        // @ts-ignore
        getAll().then(({ users }: { users: IUser[] }) => {
            setUsers(users);
        });
    };

    useEffect(() => {
        refetch();
    }, []);

    return (
        <Layout>
            <h1>User list</h1>
            {
                users.map(user => (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr max-content', marginBottom: 5 }}>
                        <div>{user.email}</div>
                        {
                            user.role !== 'Admin' ? (
                                <div style={{ display: 'grid', gridTemplateColumns: 'max-content max-content' }}>
                                    <p style={{ marginRight: 10 }}>Banned</p>
                                    <Switch checked={user.banned} onChange={(e) => {
                                        toggleBan(user.id).then(() => { refetch(); });
                                    }}/>
                                </div>
                            ) : (
                                <div>
                                    Can't be banned
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </Layout>
    )
};

export default Admin;

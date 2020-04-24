import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useSelector } from 'react-redux';
import {IGlobalState} from '../../store';

const Account: React.FC = () => {

    const user = useSelector((state: IGlobalState) => state.users.user);

    return (
        <Layout>
            {
                !!user ? (
                    <div>
                        {`Hello, ${user.name}!`}
                    </div>
                ) : (
                    <div>
                        loading
                    </div>
                )
            }

        </Layout>
    )
};

export default Account;

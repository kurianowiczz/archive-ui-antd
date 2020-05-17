import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import {IGlobalState} from '../../store';
import { fetchFiles } from '../../store/files/actions';
import FileList from "../../components/FileList/FileList";

const Account: React.FC = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: IGlobalState) => state.users.user);

    useEffect(() => {
        dispatch(fetchFiles());
    }, [dispatch]);

    const files = useSelector((state: IGlobalState) => state.files.files);

    return (
        <Layout>
            {
                !!user ? (
                    <div>
                        {`Hello, ${user.name}!`}
                    </div>
                ) : (
                    <div>
                        Loading...
                    </div>
                )
            }
            <FileList files={files} />
        </Layout>
    )
};

export default Account;

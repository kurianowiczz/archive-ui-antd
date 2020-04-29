import React, {useCallback, useState} from 'react';
import Layout from '../../components/Layout/Layout';

import styles from './Upload.module.css';
import { Button } from 'antd';
import { Upload } from 'antd';
import axios from '../../api/axios';

const { Dragger } = Upload;

const UploadFile: React.FC = () => {
    const [file, setFile] = useState<unknown>(null);
    const onFileUploadChange = useCallback((info) => {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            console.log(`${info.file.name} file uploaded successfully.`);
            setFile(info.file);
        } else if (status === 'error') {
            console.log(`${info.file.name} file upload failed.`);
            setFile(null);
        }
    }, []);

    // const onUploadClick = useCallback(async () => {
    //     if (!file) {
    //         return;
    //     }
    //     const formData = new FormData();
    //     // @ts-ignore
    //     formData.append('file', file);
    //     const response = await axios.post('/files', formData );
    //     console.log(response);
    // }, [file]);

    return (
        <Layout>
        <section>
            <p>Title</p>
            <Dragger
                multiple={false}
                headers={{ authorization: localStorage.getItem('token') as string}}
                action={process.env.REACT_APP_BASE_URL + 'files'}
                onChange={onFileUploadChange}
            />
        </section>
        </Layout>
    )
};

export default UploadFile;

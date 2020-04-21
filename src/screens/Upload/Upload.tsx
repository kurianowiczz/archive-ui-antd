import React, { useCallback } from 'react';
import Layout from '../../components/Layout/Layout';

import styles from './Upload.module.css';
import { Button } from 'antd';
import { Upload } from 'antd';
const { Dragger } = Upload;

const UploadFile: React.FC = () => {

    const onFileUploadChange = useCallback((info) => {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            console.log(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            console.log(`${info.file.name} file upload failed.`);
        }
    }, []);

    return (
        <Layout>
        <section>
            <p>Title</p>
            <Dragger onChange={onFileUploadChange}></Dragger>
            <Button type="primary" className={styles.btn}>Upload</Button>
        </section>
        </Layout>
    )
};

export default UploadFile;

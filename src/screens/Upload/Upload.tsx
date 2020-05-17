import React, {useCallback, useState} from 'react';
import Layout from '../../components/Layout/Layout';
import logo from '../../assets/upload-cloud.png';
import { Upload } from 'antd';
import { IFile } from "../../store/files/reducer";

const { Dragger } = Upload;

const UploadFile: React.FC = () => {
    const [uploaded, setUploaded] = useState<IFile[]>([]);
    const onFileUploadChange = useCallback((info) => {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            console.log(`${info.file.name} file uploaded successfully.`);
            console.log(info.file.response);
            setUploaded([...uploaded, info.file.response.newFile as IFile])
        } else if (status === 'error') {
            console.log(`${info.file.name} file upload failed.`);
        }
    }, [uploaded]);

    return (
        <Layout>
        <section>
            <h1>Upload files below</h1>
            <Dragger
                multiple={false}
                headers={{ authorization: localStorage.getItem('token') as string}}
                action={process.env.REACT_APP_BASE_URL + 'files'}
                onChange={onFileUploadChange}
                listType={'picture'}
            >
                <div>
                    <img src={logo} alt={'Logo'} width={200} style={{ filter: 'grayscale(100%)', opacity: 0.2 }}/>
                    <div style={{ fontSize: 20, color: '#1890ff', marginTop: 10 }}>Click here or drag files</div>
                </div>
            </Dragger>
            {
                uploaded.length > 0 && (
                    <div style={{ marginTop: 25 }}>
                        <h1>Recently uploaded files</h1>
                        {
                            uploaded.map((file) => (
                                <div style={{
                                    display: 'grid',
                                    backgroundColor: '#fafafa',
                                    marginTop: 10,
                                    borderRadius: 5,
                                    border: '1px dashed #d9d9d9',
                                    padding: 20,
                                }}>
                                    <div style={{ margin: 0 }}>{file.fileName}</div>
                                    <a
                                        href={process.env.REACT_APP_BASE_URL + file.downloadLink}
                                        rel={'noopener noreferrer'}
                                        target={'_blank'}
                                        style={{ color: '#1890ff' }}
                                    >
                                        {process.env.REACT_APP_BASE_URL + file.downloadLink}
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </section>
        </Layout>
    )
};

export default UploadFile;

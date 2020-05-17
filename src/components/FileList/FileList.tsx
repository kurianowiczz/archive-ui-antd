import React from 'react';
import { IFile } from "../../store/files/reducer";
import Icon from 'antd/lib/icon';

const FileList: React.FC<{ files: IFile[] }> = ({ files }) => {
    return (
        <div style={{ marginTop: 10 }}>
            <h1>Your files</h1>
            {
                files.map((file) => (
                    <div style={{ display: 'grid', gridTemplateColumns: 'max-content 1fr', gridColumnGap: '8px' }}>
                        <a
                            href={process.env.REACT_APP_BASE_URL + file.downloadLink}
                            download={file.fileName}
                            rel={'noopener noreferrer'}
                            target={'_blank'}
                        >
                            <Icon type="download" />
                        </a>
                        <p>{file.fileName}</p>
                    </div>
                ))
            }
        </div>
    )
};

export default FileList;

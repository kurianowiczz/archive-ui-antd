import { Button } from 'antd';
import React  from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/upload-cloud.png';

const Home: React.FC = () => {
    return(
        <div style={{ width: '400px', margin: 'auto', marginTop: '100px' }}>
            <h1 style={{ color: '#1890ff', margin: 'auto', width: 'max-content', marginBottom: '20px' }}>File Uploader</h1>
            <div style={{ marginBottom: '30px', fontWeight: 900 }}>
                <img src={logo} alt="Logo" width={400}/>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridColumnGap: '30px' }}>
                <Link to={'/signin'}><Button type="primary" style={{ width: '100%' }}>Sign In</Button></Link>
                <Link to={'/signup'}><Button type="primary" style={{ width: '100%' }}>Sign Up</Button></Link>
            </div>
        </div>
    )
};

export default Home;

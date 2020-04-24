import { Button } from 'antd';
// import styles from './SignIn.module.css';
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

    return(
        <div>
            <Link to={'/signin'}><Button type="primary" >Sign In</Button></Link>
            <Link to={'/signup'}><Button type="primary" >Sign Up</Button></Link>

        </div>
    )
};

export default Home;

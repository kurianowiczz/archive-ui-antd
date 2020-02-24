import { Input, Button } from 'antd';
import styles from './SignIn.module.css';
import React, { useState} from "react";
import { Typography } from 'antd';
const { Paragraph } = Typography;

const SignInFrom: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(value.currentTarget.value);
    };
    const onPasswordChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(value.currentTarget.value);
    };

    return(
        <div>
            <Paragraph>Email: </Paragraph>
            <Input value={email} onChange={onEmailChange} />
            <Paragraph>Password: </Paragraph>
            <Input value={password} onChange={onPasswordChange} />
            <Button type="primary" className={styles.btn}>SignUp</Button>

        </div>
    )
};

export default SignInFrom;

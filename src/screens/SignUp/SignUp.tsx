import { Input, Button } from 'antd';
import styles from './SignUp.module.css';
import React, {useState} from "react";
import { Typography } from 'antd';
const { Paragraph } = Typography;

const SignUpFrom: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onEmailChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(value.currentTarget.value);
    };
    const onPasswordChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(value.currentTarget.value);
    };
    const onConfirmPasswordChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(value.currentTarget.value);
    };

    return(
        <div>
            <Paragraph>Email: </Paragraph>
            <Input value={email} onChange={onEmailChange} />
            <Paragraph>Password: </Paragraph>
            <Input value={password} onChange={onPasswordChange} />
            <Paragraph>Confirm password: </Paragraph>
            <Input value={confirmPassword} onChange={onConfirmPasswordChange} />
            <Button type="primary" className={styles.btn}>SignUp</Button>

        </div>

    )
};

export default SignUpFrom;

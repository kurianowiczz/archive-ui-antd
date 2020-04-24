import { Input, Button } from 'antd';
import styles from './SignIn.module.css';
import React, { useState} from "react";
import { Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { login } from '../../store/users/actions';
const { Paragraph } = Typography;

const SignInFrom: React.FC = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(value.currentTarget.value);
    };
    const onPasswordChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(value.currentTarget.value);
    };

    const onClick = () => {
        dispatch(login({ email, password }));
    };

    return(
        <div>
            <Paragraph>Email: </Paragraph>
            <Input value={email} onChange={onEmailChange} />
            <Paragraph>Password: </Paragraph>
            <Input value={password} onChange={onPasswordChange} />
            <Button type="primary" onClick={onClick} className={styles.btn}>SignIn</Button>

        </div>
    )
};

export default SignInFrom;

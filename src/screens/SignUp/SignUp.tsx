import { Input, Button } from 'antd';
import styles from './SignUp.module.css';
import React, { useState } from "react";
import { Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { register } from '../../store/users/actions';

const { Paragraph } = Typography;


const SignUpFrom: React.FC = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onNameChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        setName(value.currentTarget.value);
    };
    const onEmailChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(value.currentTarget.value);
    };
    const onPasswordChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(value.currentTarget.value);
    };

    const onClick = () => {
        dispatch(register({ name, email, password }));
    };

    return(
        <div>
            <Paragraph>Name: </Paragraph>
            <Input value={name} onChange={onNameChange} />
            <Paragraph>Email: </Paragraph>
            <Input value={email} onChange={onEmailChange} />
            <Paragraph>Password: </Paragraph>
            <Input value={password} onChange={onPasswordChange} />
            <Button type="primary" onClick={onClick} className={styles.btn}>SignUp</Button>

        </div>

    )
};

export default SignUpFrom;

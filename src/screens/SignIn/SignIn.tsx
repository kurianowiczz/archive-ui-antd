import { Input, Button } from 'antd';
import React, { useState} from "react";
import { Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { login } from '../../store/users/actions';
import { Link } from "react-router-dom";
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
        <div
            style={{
                width: '400px',
                margin: 'auto',
                marginTop: '100px',
                borderRadius: 20,
                border: '1px solid #1890ff4a',
                padding: 30,
                boxShadow: '0 20px 40px #1890ff4a'
            }}
        >
            <Paragraph style={{ marginBottom: 5 }}>Email: </Paragraph>
            <Input value={email} onChange={onEmailChange} />
            <Paragraph style={{ marginTop: 20, marginBottom: 5 }}>Password: </Paragraph>
            <Input type={'password'} value={password} onChange={onPasswordChange} />
            <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
                <Button type="primary" onClick={onClick}>Sign In</Button>
                <Link to={'/'}><Button>Back</Button></Link>
            </div>
        </div>
    )
};

export default SignInFrom;

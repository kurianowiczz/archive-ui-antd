import { Input, Button } from 'antd';
import React, { useCallback, useState } from "react";
import { Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { register } from '../../store/users/actions';
import { Link } from "react-router-dom";

const { Paragraph } = Typography;


const SignUpFrom: React.FC = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onNameChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        setName(value.currentTarget.value);
    };
    const onEmailChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(value.currentTarget.value);
    };
    const onPasswordChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(value.currentTarget.value);
    };

    const onConfirmPasswordChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(value.currentTarget.value);
    };

    const onClick = useCallback(() => {
        if (password === confirmPassword) {
            dispatch(register({ name, email, password }));
        }
    }, [confirmPassword, dispatch, email, name, password]);

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
            <Paragraph style={{ marginBottom: 5 }}>Name: </Paragraph>
            <Input value={name} onChange={onNameChange} />
            <Paragraph style={{ marginTop: 20, marginBottom: 5 }}>Email: </Paragraph>
            <Input value={email} onChange={onEmailChange} />
            <Paragraph style={{ marginTop: 20, marginBottom: 5 }}>Password: </Paragraph>
            <Input type={'password'} value={password} onChange={onPasswordChange} />
            <Paragraph style={{ marginTop: 20, marginBottom: 5 }}>Confirm password: </Paragraph>
            <Input type={'password'} value={confirmPassword} onChange={onConfirmPasswordChange} />
            <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
                <Button type="primary" onClick={onClick}>Sign Up</Button>
                <Link to={'/'}><Button>Back</Button></Link>
            </div>
        </div>

    )
};

export default SignUpFrom;

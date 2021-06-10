import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, notification} from 'antd';
import { Icon } from '@ant-design/compatible';

import {
    emailValidation, minLengthValidation
} from "../../../utils/formValidation";


import './RegisterForm.scss';

export default function RegisterForm() {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        repeatPassword: "",
        privacyPolicy: false
    });

    const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        repeatPassword: false,
        privacyPolicy: false
      });
    
    const changeForm = e => {
      
    };

    const inputValidation = e => {
        const { type, name } = e.target;
    
        if (type === "email") {
          setFormValid({ ...formValid, [name]: emailValidation(e.target) });
        }
        if (type === "password") {
          setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) });
        }
        if (type === "checkbox") {
          setFormValid({ ...formValid, [name]: e.target.checked });
        }
      };

    const register = (e) => {
        //e.preventDefault();
        console.log(formValid);
    }
    return (
        <Form className="register-form" onFinish={register} onChange={changeForm}>
            <Form.Item>
                <Input
                    prefix={<Icon type="user" style={{color:"rgba(0,0,0,.25"}}/>} 
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    className="register-form__input"
                    onChange = {inputValidation}
                    value={inputs.email}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="lock" style={{color:"rgba(0,0,0,.25"}}/>} 
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="register-form__input"
                    onChange = {inputValidation}
                    value={inputs.password}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="lock" style={{color:"rgba(0,0,0,.25"}}/>} 
                    type="password"
                    name="repeatPassword"
                    placeholder="Repetir Contraseña"
                    className="register-form__input"
                    onChange = {inputValidation}
                    value={inputs.repeatPassword}
                />
            </Form.Item>
            <Form.Item>
                <Checkbox name="privacyPolicy" onChange = {inputValidation} checked={inputs.privacyPolicy}>
                    He leído y acepto la política de privacidad.
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form__button">
                    Crear cuenta
                </Button>
            </Form.Item>
        </Form>
    );
}
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, notification} from 'antd';
import { Icon } from '@ant-design/compatible';

import {
    emailValidation, minLengthValidation
} from "../../../utils/formValidation";

import { signUpApi } from "../../../api/user";

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
        if (e.target.name === "privacyPolicy") {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked
            });
            } else {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            });
        }
        
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

    const register = async(e) => {
        //e.preventDefault();
        
        const {email, password, repeatPassword, privacyPolicy} = formValid;
        const emailVal = inputs.email;
        const passwordVal = inputs.password;
        const repeatPasswordVal = inputs.repeatPassword;
        const privacyPolicyVal = inputs.privacyPolicy;

        if (!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal) {
            notification["error"]({
              message: "Todos los campos son obligatorios"
            });
        } else {
            if (passwordVal !== repeatPasswordVal) {
            notification["error"]({
            message: "Las contrase??as tienen que ser iguales."
            });
        }else {
            const result = signUpApi(inputs);
          }
        }
    }
    return (
        <Form className="register-form" onFinish={register} onChange={changeForm}>
            <Form.Item>
                <Input
                    prefix={<Icon type="user" style={{color:"rgba(0,0,0,.25"}}/>} 
                    type="email"
                    name="email"
                    placeholder="Correo Electr??nico"
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
                    placeholder="Contrase??a"
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
                    placeholder="Repetir Contrase??a"
                    className="register-form__input"
                    onChange = {inputValidation}
                    value={inputs.repeatPassword}
                />
            </Form.Item>
            <Form.Item>
                <Checkbox name="privacyPolicy" onChange = {inputValidation} checked={inputs.privacyPolicy}>
                    He le??do y acepto la pol??tica de privacidad.
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
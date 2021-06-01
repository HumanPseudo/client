import React from 'react';
import Logo from '../../../assets/img/png/logo-white.png'
import { Button } from 'antd';
//import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Icon } from '@ant-design/compatible';
import "./MenuTop.scss";

export default function MenuTop(props){
    const { menuCollapsed, setMenuCollapsed } =  props;
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img className="menu-top__left-logo"
                src={Logo}
                alt="test"
                />
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed) }> 
                    <Icon type={menuCollapsed ? "menu-unfold" : "menu-fold"} /> 
                </Button>
            </div>
            <div className="menu-top__right-logo">
                <Button type="link" onClick={() => console.log('logout.')} >
                    <Icon type="poweroff" />
                </Button>
            </div>
        </div>
    );
}
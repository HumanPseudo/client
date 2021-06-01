import react from "react";
import {Layout} from 'antd';
import { Route, Switch } from "react-router-dom";
import routes from "../config/routes";

import "./LayoutBasic.scss";
import { Content } from "antd/lib/layout/layout";


export default function LayoutBasic(props) {
    const { routes } = props;
    const { Contact, Footer } = Layout;
    return (
        <Layout>
            <h2>Menu Sidebar</h2>
            <Layout>
                <Content>
                    <LoadRoutes routes = { routes } />

                </Content>
                <Footer>footer....</Footer>
            </Layout>
        </Layout>
      );
}

function LoadRoutes({ routes }){
    return (
        <Switch>
            {routes.map((route, index) => (
            <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
            />
            ))}
        </Switch>
    );
}
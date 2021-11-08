
import React, { Fragment }  from 'react';
import { Layout } from '@douyinfe/semi-ui';
import Header from './Header';

function Login() {
    const { Footer } = Layout;
    return (
        <Fragment>
            <Layout>
                <Header/>
            
                <Footer/>
            </Layout>
        </Fragment>
    )
}

export default Login
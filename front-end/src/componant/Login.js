
import React, { Fragment }  from 'react';
import { Layout, Col, Row, Form, Button  } from '@douyinfe/semi-ui';
import Header from './Header';
import "./componantCSS/login.css"


function Login() {
    const { Footer, Content } = Layout;
    return (
        <Fragment>
            <Layout>
                <Header/>
                <Content className= "login-content">
                    <Row>  
                        <Col 
                            span={12} 
                            offset={6}
                            >
                            <div className="col-content" >
                                <h1>WELCOME</h1>  
                            <Form
                                style={{ 
                                    width: 300, 
                                    margin: '0 auto',
                                }}
                                >
                                <Form.Input 
                                    className='login-input'
                                    field='userName'
                                    label='UserName'
                                    />
                                <Form.Input
                                    className='login-input'
                                    field='userPhone' 
                                    label='UserPhone' 
                                    />
                                <Form.Input 
                                    className='login-input'
                                    field='password' 
                                    label='Password' 
                                    mode="password" 
                                    />
                                <Button 
                                    type="primary" 
                                    htmlType="submit" 
                                    className="login-btn"
                                >   Submit  
                                </Button>
                            </Form>
                            </div>
                        </Col>
                        <ul className="bg-bubbles">
		                    <li></li>
		                    <li></li>
		                    <li></li>
		                    <li></li>
		                    <li></li>
		                    <li></li>
		                    <li></li>
		                    <li></li>
		                    <li></li>
		                    <li></li>
	                    </ul>
                    </Row>
                </Content>
                <Footer/>
            </Layout>
        </Fragment>
    )
}

export default Login
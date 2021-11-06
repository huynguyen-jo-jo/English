
import React  from 'react';
import { Layout } from '@douyinfe/semi-ui';
import Header from './Header';
import Content from './Content';

function ShortMoment() {
    const { Footer } = Layout;
    return (
        <Layout style={{border: '1px solid var(--semi-color-border)'}}>
          <Header/>
          <Content/>
          <Footer/>
        </Layout>
    )
}
export default ShortMoment
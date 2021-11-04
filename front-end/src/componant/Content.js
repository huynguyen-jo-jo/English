import { Layout, Nav, Col, Row } from '@douyinfe/semi-ui';
import { IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons';
import Video from './vid';


function Content() {
    const  { Content, Sider  } = Layout
    return (
        <Layout style={ { height: '100vh' } }>
            <Sider style={ { backgroundColor: 'var(--semi-color-bg-1)' } }>
                  <Nav
                      style={ { maxWidth: 250, height: '100%' } }
                      defaultSelectedKeys={ ['Home'] }
                      items={[
                          { itemKey: 'Home', text: 'Home', icon: <IconHome size="large" /> },
                          { itemKey: 'Histogram', text: 'Histogram', icon: <IconHistogram size="large" /> },
                          { itemKey: 'Live', text: 'Live', icon: <IconLive size="large" /> },
                          { itemKey: 'Setting', text: 'Setting', icon: <IconSetting size="large" /> },
                      ]}
                      footer={{
                          collapseButton: true,
                      }}
                  />
            </Sider>
            <Content
                style={{
                  padding: '24px',
                  backgroundColor: 'var(--semi-color-bg-0)'
                }}
              >
              <div className="grid">
                <Row>
                    <Col span={8}><div className="col-content">col-7</div></Col>
                    <Col span={8}><div className="col-content"><Video/><Video/></div></Col>
                    <Col span={8}><div className="col-content">col-8</div></Col>
                </Row>
              </div>
            </Content>
        </Layout>
    )
}

export default Content
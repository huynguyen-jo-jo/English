import { Layout, Nav, Col, Row } from '@douyinfe/semi-ui';
import { IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons';
import Video from './vid';

const listVideo = [
    {
        src: 'videos/video1.mp4',
        title: "Do you like this song?",
        name: "Jack",
        userName: "AM",
        usercolor:"red"
    },
    {
        src: 'videos/video2.mp4',
        title: "Do you like this song?",
        name: "Mun",
        userName: "AM",
        usercolor:  "red"
    },
    {
        src: 'videos/video3.mp4',
        title: "Do you like this song?",
        name: "Bun",
        userName: "AM",
        usercolor: "light-blue"
    },
    {
        src: 'videos/video4.mp4',
        title: "Do you like this song?",
        name: "Hi",
        userName: "HH",
        usercolor: "amber"
    },
    {
        src: 'videos/video5.mp4',
        title: "Do you like this song?",
        name: "Admin",
        userName: "NN",
        usercolor: "red"
    },
]
function Content() {
    const  { Content, Sider  } = Layout
    return (
        <Layout style={ { height: '691px' } }>
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
                          collapseText: 'Close'
                      }}
                  ></Nav>
            </Sider>
            <Content
                style={{
                  padding: '24px',
                  backgroundColor: 'var(--semi-color-bg-0)'
                }}
              >
              <div className="grid">
                <Row>
                    <Col span={8}><div className="col-content">Demo</div></Col>
                    <Col span={8}>
                        <div className="col-content">
                        { listVideo.map( video => { return <Video {...video}/> } )}
                        </div>
                    </Col>
                    <Col span={8}><div className="col-content">Demo</div></Col>
                </Row>
              </div>
            </Content>
        </Layout>
    )
}

export default Content
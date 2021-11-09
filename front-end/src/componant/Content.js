import { useState } from 'react';
import { Layout, Nav, Col, Row } from '@douyinfe/semi-ui';
import { IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons';
import Video from './vid';

const list = [
    {
        src: 'videos/video10.mp4',
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

const song = [
    {
        src: 'videos/video6.mp4',
        title: "Do you like this song?",
        name: "Jack",
        userName: "AM",
        usercolor:"red"
    },
    {
        src: 'videos/video7.mp4',
        title: "Do you like this song?",
        name: "Jack",
        userName: "AM",
        usercolor:"red"
    },
    {
        src: 'videos/video8.mp4',
        title: "Do you like this song?",
        name: "Jack",
        userName: "AM",
        usercolor:"red"
    },
    {
        src: 'videos/video9.mp4',
        title: "Do you like this song?",
        name: "Jack",
        userName: "AM",
        usercolor:"red"
    },
    {
        src: 'videos/video10.mp4',
        title: "Do you like this song?",
        name: "Jack",
        userName: "AM",
        usercolor:"red"
    }
]

function Content() {
    const  { Content, Sider  } = Layout
    const  [ listVideo, setListVideo ] = useState(list)

    const changeContent = videos => {
        setListVideo(videos)
    }

    return (
        <Layout style={ { height: '691px' } }>
            <Sider style={ { backgroundColor: 'var(--semi-color-bg-1)' } }>
                  <Nav
                      style={ { maxWidth: 250, height: '100%' } }
                      defaultSelectedKeys={ ['Home'] }
                      items={[
                          { itemKey: 'Home', text: 'Home', icon: <IconHome size="large"/>, onClick:  function(){ changeContent(list)} },
                          { itemKey: 'Learn new words', text: 'Learn new words', icon: <IconHistogram size="large"/>, onClick: function(){ changeContent(song)} },
                          { itemKey: 'Song', text: 'Song', icon: <IconLive size="large" />, onClick:  function(){ changeContent(song)} },
                          { itemKey: 'Grammar', text: 'Grammar', icon: <IconSetting size="large"/>, onClick:  function(){ changeContent(song)} },
                      ]}
                      footer={{
                          
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
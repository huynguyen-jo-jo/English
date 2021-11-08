import "../../node_modules/video-react/dist/video-react.css";
import  { Fragment } from 'react';
import { Col, Row, Avatar } from '@douyinfe/semi-ui';
import { Player, BigPlayButton } from 'video-react';

function Video(props) {
    return (
        <Fragment>
            <div style={{ marginBottom: 40 }}>
                <Row style={{ marginBottom: 10 }}>
                    <Col span={4}>
                        <div className="col-content">
                            <Avatar 
                                color={props.usercolor} 
                                style={{ margin: 4 }}
                            >
                                {props.userName}
                            </Avatar>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="col-content">
                            <h3 
                                style= {{ margin: 0 }}
                                >
                                {props.name}
                            </h3>
                            <span>{props.title}</span>
                        </div>
                    </Col>
                </Row>
                <Player 
                    fluid = {false} 
                    height ={516} 
                    width ={290} 
                    style= {{ borderRadius: 15}}
                    >
                        <source  src={props.src}/>
                        <BigPlayButton position="center"/>      
                </Player>
            </div>
        </Fragment>  
    )
}
export default Video
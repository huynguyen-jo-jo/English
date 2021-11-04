import "../../node_modules/video-react/dist/video-react.css";
import  { Fragment } from 'react';
import { Player } from 'video-react';

function Video() {
    
    return (
        <Fragment>
            <Player fluid = {false} height ={516} width ={290}>
                <source  src="videos/download.mp4"/>            
            </Player>
        </Fragment>  
    )
}

export default Video
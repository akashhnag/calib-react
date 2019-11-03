import React, { Component } from 'react'
import {connect} from 'react-redux';
import ImageView from '../body/ImageView';
import RTSPView from '../body/RTSPView'
import VideoView from '../body/VideoView';

class WorkArea extends Component {

    render() {       
        if(window.location.href==='http://localhost:3000/image'
        || window.location.href==='http://localhost:3000/'){            
            return(
                <ImageView></ImageView>
            )
        }  
        else if(window.location.href==='http://localhost:3000/rtsp'){            
            return(
                <RTSPView></RTSPView>
            )
        }
        else if(window.location.href==='http://localhost:3000/video'){           
            return(
                <VideoView></VideoView>
            )
        }
       
    }
}

function mapStateToProps(state){    
    return(
        {
            currentMode:state.modeSwitch
        }
       
    )
}

export default connect(mapStateToProps)(WorkArea)


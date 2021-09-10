import React from "react"
import "./faceRecognition.css"

class FaceRecognition extends React.Component{

    render(){
        return(
            <div className="faceWrapper">
                <div>
                     <img src={this.props.pix} alt="" height="500" width="auto" />
                </div>
            </div>
        )
    }
}

export default FaceRecognition
import React from "react"
import "./faceRecognition.css"

class FaceRecognition extends React.Component{

    render(){

        const boundingBoxStyle = {
            position:"absolute",
            top: this.props.top,
            right: this.props.right,
            bottom: this.props.bottom,
            left: this.props.left
        }

        return(
            <div className="faceWrapper">
                <div style={{position:"absolute"}}>
                    <img id="inputImage" src={this.props.pix} alt="" height="auto" width="500" />
                    <div className="bounding-box" style={boundingBoxStyle}></div>
                </div>
            </div>
        )
    }
}

export default FaceRecognition
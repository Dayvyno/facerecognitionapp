import './App.css';
import ImageFormLink from './components/imageFormLink/imageFormLink';
import Logo from './components/logo/logo';
import Navigation from './components/navigation/navigation';
import Rank from './components/rank/rank';
import Particles from 'react-particles-js';
import React from 'react';
import Clarifai from "clarifai"
import FaceRecognition from './components/faceRecognition/faceRecognition';

const particleOptions={
  "particles": {
      "number": {
          "value": 400,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 3,
          "random": true,
          "anim": {
              "speed": 4,
              "size_min": 0.3
          }
      },
      "line_linked": {
          "enable": false
      },
      "move": {
          "random": true,
          "speed": 1,
          "direction": "top",
          "out_mode": "out"
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "bubble"
          },
          "onclick": {
              "enable": true,
              "mode": "repulse"
          }
      },
      "modes": {
          "bubble": {
              "distance": 250,
              "duration": 2,
              "size": 0,
              "opacity": 0
          },
          "repulse": {
              "distance": 400,
              "duration": 4
          }
      }
  }
}

const app = new Clarifai.App({apiKey: "46bfa20600d342da92980ff2813a26c0"})



class App extends React.Component {
  constructor(props){
    super();
    this.state={
      input: "",
      imageUrl: ""
    }
  }


  onChangeHandler=(event)=>{
    this.setState({input:event.target.value})
  }

  onButtonSubmit=()=>{
    this.setState({imageUrl:this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(function(response){
          let data = response.outputs[0].data.regions[0].region_info.bounding_box
          console.log(data)

        },
        function(err){}
        )
  }


  render(){

    return (
      <div className="App">
        <Particles params={particleOptions} className="particles" />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageFormLink inputChange={this.onChangeHandler} submit={this.onButtonSubmit} />
        <FaceRecognition pix={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;

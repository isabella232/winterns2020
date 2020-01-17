import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import Form from './Form.jsx';
import KVInputs from './KVInputs.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
            value: '',
            showForm: false,
            showIntro: true,
        };
        
        this.toggleButton = this.toggleButton.bind(this);
    }

    toggleButton(param) {
        this.setState({
            value: param,
            showForm: true,
            showIntro: false
        });
    }


    render() {
        return ( 
          <>
          {/* <Form hello={'hello'} Method={this.state.value} /> */}
            <div className="rectangle"> {/*  dark blue full width banner code begins  */}
                <h1>Bitly API Explorer</h1>
            </div> {/* dark blue full width banner code ends */}

            <div className="blueRect"> {/* baby blue verticle banner code begins  */}
               
                <div className="sidenav">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
                </div>
                
             </div> {/* baby blue verticle banner code ends  */}

            <div align="center" > {/* code for get post patch delete buttons begins */}
                <button className='getbutton'  onClick={() => this.toggleButton("GET")}>Get</button>
                <button className='postbutton' onClick={() => this.toggleButton("POST")}>Post</button>
                <button className='patchbutton' onClick={() => this.toggleButton("PATCH")}>Patch</button>
                <button className='deletebutton' onClick={() => this.toggleButton("DELETE")}>Delete</button>
            </div> {/* code for get post patch delete buttons ends  */}
           
            <div className="centerCard">  {/* CENTER CARD WITH INTRO code begins  */}

               {
                   this.state.showIntro ?
                <p className="intro">
                    Introduction: Welcome to the Bitly API! If you'd like to use Bitly to shorten, brand, share, 
                    or retrieve data from links programmatically, you've come to the right place. 
                    If you're interested in integrating 
                    your app or software platform with Bitly, you'll need to register and authenticate your service with our API. To do 
                    so please contact us at API_sales@bit.ly 
                    We currently provide our documentation in the form of an OpenAPI 2.0 document. 
                    We do not support any code-generation at this time but feel free to use the specification if you would like.
                </p> : ' '
               }
            </div> {/* CENTER CARD WITH INTRO code ends   */}

            {/* logo image. for some reason it only shows if i have the image tag in the body not in the header idk why */}
                <img className= "logo" alt="bitly logo"src="https://cdn.iconscout.com/icon/free/png-256/bitly-1-432498.png"/>
  

             <div> {/*takes response from bitly api and turns it into json string  */}
                {
                    this.state.showForm ?
                    <Form Method={this.state.value}/> : ''
                }
            </div>
                {/* end of json string code */}
            </> 
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));


import React, { Component } from 'react';
import './assets/estilo.css';
import cronometro from './assets/cronometro.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      btn: 'START',
    };
    this.timer = null;
    this.turnOn = this.turnOn.bind(this);
    this.clean = this.clean.bind(this)
  }

  turnOn() {
    let state = this.state;

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'START';
    } else {
      this.timer = setInterval(()=>{
        let state = this.state;
        state.num += 0.1;
        this.setState(state);
      },100);
      state.btn = 'PAUSE'
    }
    this.setState(state);
  }

  clean(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.num = 0;
    
    state.btn = 'START'
    this.setState(state)
  }

  render(){
    return(
      <div className='container'>
        <img src={cronometro} className='img'/>
        <a className='timer'>{this.state.num.toFixed(1)}</a>
        <div className='area-btn'>
          <a className='btn' onClick={this.turnOn}>{this.state.btn}</a>
          <a className='btn' onClick={this.clean}>CLEAR</a>
        </div>
      </div>
    );
  }
}

export default App;
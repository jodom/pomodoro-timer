import React, { Component } from 'react';

import './App.css'
import './font-awesome/css/font-awesome.css'

import Header from './Header.js'
import Clock from './Clock.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            flag: "play"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.timeSet = [0, 25, 0];
        this.setState(
            {
                hours: this.timeSet[0],
                minutes: this.timeSet[1],
                seconds: this.timeSet[2]
            }
        );

        this.control();
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    setTimer() {
        this.timer = setInterval(
            () => this.countDown(),
            1000
        );
    }

    stopTimer() {
        clearInterval(this.timer);
    }

    control() {
        // reset, play, pause, set, save
        const flag = this.state.flag;

        if (["pause", "reset", "set", "save"].includes(flag)){
            this.stopTimer();
        }

        if( flag === "reset"){
            this.setState(
                {
                    hours: this.timeSet[0],
                    minutes: this.timeSet[1],
                    seconds: this.timeSet[2]
                }
            );
            this.stopTimer();
        }

        if (flag === "play"){
            this.setTimer();
        }
    }

    countDown() {
        var timeLeft = (
            this.state.hours*60*60 +
            this.state.minutes*60 +
            this.state.seconds) * 1000;

        console.log(this.state.flag);

        timeLeft -= 1000; // a second gone

        if (timeLeft >= 0 ){
            var hrs = Math.floor( timeLeft / 3600000)
            var mins = Math.floor( (timeLeft % 3600000 ) / 60000 )
            var secs = Math.floor( (timeLeft % 60000) / 1000 );
            this.setState(
                {
                    hours: hrs,
                    minutes: mins,
                    seconds: secs
                }
            )
        }else if(timeLeft < 0){
            this.stopTimer()
        }
        this.timeLeft = (
            this.state.hours*60*60 +
            this.state.minutes*60 +
            this.state.seconds) * 1000;

    }

    handleClick(e) {
        var btn = e.target.getAttribute('flag');
        console.log(btn)
        switch(btn) {
            case 'play': // continue the pomodoro
                this.setState({ flag: "play" }, this.control);
                break;
            case 'pause': // stop the pomodoro
                this.setState({ flag: "pause" }, this.control);
                break;
            case 'reset': // restart current pomodoro
                this.setState({ flag: "reset" }, this.control);
                break;
            case 'set': // show buttons for changing the Clock duration prop
                this.setState({ flag: "set" }, this.control);
                break;
            case 'save': // save Clock duration and hide set buttons
                this.setState({ flag: "save"}, this.control);
                break;
            default:
                this.setState({ flag: "play" }, this.control);
        }
    }

    render() {
        const flag = this.state.flag;
        return (
            <div className="App">
                <Header />
                <Clock
                    time={[
                        this.state.hours,
                        this.state.minutes,
                        this.state.seconds
                    ]}
                    flag={this.state.flag}/>
                <div className="Footer">
                    <button onClick={this.handleClick} className="reset" flag="reset"><i className="fa fa-undo fa-2x" flag="reset"></i></button>
                    { ["pause", "reset", "set", "save"].includes(flag) ?
                        <button onClick={this.handleClick} className="play" flag="play"> <i className="fa fa-play fa-2x" flag="play"></i> </button>:
                        <button onClick={this.handleClick} className="play" flag="pause"> <i className="fa fa-pause fa-2x" flag="pause"></i> </button>
                    }
                    { flag === "set" ?
                        <button onClick={this.handleClick} className="save" flag="save"> <i className="fa fa-save fa-2x" flag="save"></i> </button>:
                        <button onClick={this.handleClick} className="set" flag="set"> <i className="fa fa-cog fa-2x" flag="set"></i> </button>
                    }
                </div>
            </div>
        );
    }
}

export default App;

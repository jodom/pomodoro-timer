import React, { Component } from 'react';
import './App.css'
import './font-awesome/css/font-awesome.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Clock />
                <Footer/>
            </div>
        );
    }
}

class Header extends Component {
    render () {
        return (
            <div className="Header">
                <button>POMODORO</button>
                <button>BREAK</button>
            </div>
        )
    }
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 25,
            seconds: 0
        }
    }

    componentDidMount (){
        this.timeLeft = (
            this.state.hours*60*60 +
            this.state.minutes*60 +
            this.state.seconds) * 1000;
    
        this.timer = setInterval(
            () => this.countDown(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    countDown() {

        var timeLeft = this.timeLeft;

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
        }
        this.timeLeft = (
            this.state.hours*60*60 +
            this.state.minutes*60 +
            this.state.seconds) * 1000;
    }

    render () {
        const {hours, minutes, seconds} = this.state;
        return (
            <div className="Clock">
                <h1>
                    { hours>9 ? hours: `0${hours}` }: 
                    { minutes>9 ? minutes: `0${minutes}` }: 
                    { seconds>9 ? seconds: `0${seconds}` }
                </h1>
            </div>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <a href="" ><i className="fa fa-undo fa-2x"></i></a>
                <a href="" className="play"><i className="fa fa-play fa-2x"></i></a>
                <a href="" ><i className="fa fa-cog fa-2x"></i></a>
                {/* <a href="" className="play"><i class="fa fa-pause fa-2x"></i></a> */}
                {/* <a href="" ><i class="fa fa-save fa-2x"></i></a> */}
            </div>
        )
    }
}

export default App;

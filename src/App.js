import React, { Component } from 'react';
import './App.css'
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
    render () {
        return (
            <div className="Clock">
                <h1>00 : 25 : 00</h1>
            </div>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <a href="" >A</a>
                <a href="" >B</a>
                <a href="" >C</a>
            </div>
        )
    }
}

export default App;

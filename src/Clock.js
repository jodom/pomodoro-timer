import React from 'react';

class Clock extends React.Component {

    render () {
        const hours = this.props.time[0];
        const minutes = this.props.time[1];
        const seconds = this.props.time[2];

        return (
            <div className="Clock">
                {
                    this.props.flag === "set" ?
                    <div>
                        <div className="carets">
                            <button onClick={this.onClick}><i className="fa fa-caret-up fa-3x"></i></button>
                            <button onClick={this.onClick}><i className="fa fa-caret-up fa-3x"></i></button>
                            <button onClick={this.onClick}><i className="fa fa-caret-up fa-3x"></i></button>
                        </div>
                        <h1>
                            { hours>9 ? hours: `0${hours}` }:
                            { minutes>9 ? minutes: `0${minutes}` }:
                            { seconds>9 ? seconds: `0${seconds}` }
                        </h1>
                        <div className="carets">
                            <button onClick={this.onClick}><i className="fa fa-caret-down fa-3x"></i></button>
                            <button onClick={this.onClick}><i className="fa fa-caret-down fa-3x"></i></button>
                            <button onClick={this.onClick}><i className="fa fa-caret-down fa-3x"></i></button>
                        </div>
                    </div> :
                    <h1>
                        { hours>9 ? hours: `0${hours}` }:
                        { minutes>9 ? minutes: `0${minutes}` }:
                        { seconds>9 ? seconds: `0${seconds}` }
                    </h1>

                }
            </div>
        )
    }
}

export default Clock;

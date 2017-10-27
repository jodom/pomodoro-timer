import React from 'react';

class Footer extends React.Component{
    render() {
        const {handleClick} = this.props;
        return (
            <div className="Footer">
                <button onClick={handleClick} className="reset" flag="reset"><i className="fa fa-undo fa-2x" flag="reset"></i></button>
                <button onClick={handleClick} className="play">
                    { this.props.flag === "pause" ?
                        <i className="fa fa-play fa-2x" flag="play"></i> :
                        <i className="fa fa-pause fa-2x" flag="pause"></i>
                    }
                </button>
                <button onClick={handleClick} className="set">
                    { this.props.flag === "set" ?
                        <i className="fa fa-save fa-2x" flag="save"></i> :
                        <i className="fa fa-cog fa-2x" flag="set"></i>
                    }
                </button>
            </div>
        )
    }
}
export default Footer;

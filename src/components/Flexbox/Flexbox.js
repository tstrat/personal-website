import React, { Component } from "react"
import './flexbox.scss';

class FlexBox extends Component {
    
    getStyle = () => {
        const { split, column, center, style  } = this.props;
        return {
            ...style,
            display: 'flex',
            flexDirection: column ? 'column' : 'row',
            justifyContent: split ? 'space-between': 'center',
            alignItems: center ? 'center' : 'flex-start'
        }
    }
    render() {
        const style = this.getStyle();
        console.log(this.props);
        return (
            <div className='flexbox' style={style}>
                {this.props.children}
            </div>
    )}
}

export default FlexBox;
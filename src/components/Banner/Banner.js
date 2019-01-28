import React, { Component } from "react"
import './banner.scss';
import Flexbox from '../Flexbox/Flexbox';
class Banner extends Component {
    render() {
        return (
            <div className='banner'>
                <Flexbox>
                    <li>Me</li>
                    <li>Projects</li>
                    <li>Let's Connect</li>
                </Flexbox>
            </div>
    )}
}

export default Banner;
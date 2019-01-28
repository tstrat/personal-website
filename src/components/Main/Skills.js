import React, { Component } from "react"
import './skills.scss';
import { TimelineLite, Power0 } from 'gsap';

class Skills extends Component {
    constructor(params) {
        super(params);

        this.state = {
            current: 1,
        }
        this.interval = null;
        this.element = null;
        this.myTween = new TimelineLite({paused: true});

        this.skills = [
            'Java',
            'ReactJS',
            'Spring/Spring-boot',
            'Git',
            'NodeJS',
            'Javascript',
            'Massive',
            'ExpressJS',
            'SocketIO',
            'PostgreSQL',
            'Redux',
            'React Router',
        ]
    }

    componentDidMount() {
       
        this.myTween.set(this.element, { autoAlpha:0 })
        .to(this.element, 0.8, { autoAlpha:1, ease: Power0.easeNone })
        .to(this.element, 0.4, { autoAlpha: 1})
        .to(this.element, 0.8, { autoAlpha: 0, ease: Power0.easeNone });
        this.myTween.play();
        this.interval = setInterval(()=> { 
            let next = this.state.current + 1;
            if (next > this.skills.length-1) {
                next = 0;
            }
            this.setState({current: next})
            
            this.myTween.restart();

        }, 2000);
    
    }

    componentWillUnmount() {
        this.myTween.kill();
        clearInterval(this.interval);
    }

    render() {
        const { current } = this.state;
        
        return (
            <div className='skills'>
                <ul>
                    <li ref={li => this.element = li}>{this.skills[current]}</li>
                </ul>
            </div>
        )
    }
}

export default Skills;
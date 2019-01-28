import React, { Component } from "react"
import './main.scss';
import Flexbox from '../Flexbox/Flexbox';
import Skills from './Skills';
import SketchContainer from './../P5Wrapper/SketchContainer';
import { TweenLite, TimelineLite } from 'gsap';


class Main extends Component {

    constructor(params){
        super(params)

        this.logo = null;
        this.subHeader = null;
        this.div1 = null;;
        this.tween = null;
        this.state = {
            timeout: false
        }
    }

    componentDidMount() {
       this.loadMain();
        
    }

    loadMain = () => {
        TweenLite.set(this.logo, {clearProps:"all"});
        TweenLite.set(this.subHeader, {clearProps:"all"});
        this.tween = new TimelineLite();
        this.tween.delay(1.5).set(this.logo, { autoAlpha: 0 }).set(this.subHeader, { autoAlpha: 0 })
        .add(TweenLite.to(this.logo, 2, {autoAlpha:1}))
        .add(TweenLite.to(this.subHeader, 2, {autoAlpha:1}));
        setTimeout(() => {
            if (!this.state.timeout) {
                this.setState({ timeout: true });
            }
        }, 5000);
        this.tween.play();
    }

    slide = () => {
        this.setState({
            timeout: false
        }, ()=> {
            this.tween.kill();
            TweenLite.to(this.logo, 1, {y:-200, opacity: 0});
            TweenLite.to(this.subHeader, 1, {y:-200, opacity: 0});
        })   
    }

    render() {
        const { timeout } = this.state;
        return (
            <div className='main'>
                <Flexbox 
                    ref={div=> this.div1 = div}
                    column 
                    center 
                    //style={{height: '80%', width:'80%', margin: '0 auto'}}
                >
                    <h1 ref={ h1=> this.logo = h1 }>Travis Stratton</h1>
                    <h2 ref={ h2=> this.subHeader = h2 }>Software Engineer and Web Developer</h2>
                    {timeout ? <Skills />: <div className='skills'><ul></ul></div>}
                </Flexbox>
                <button onClick={this.slide}>Fade out all cool</button>        
                <button onClick={this.loadMain}>reset</button>        
                <SketchContainer/>
            </div>
    )}
}

export default Main;
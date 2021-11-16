import downArrow from './downArrow.png';
import './style.scss';
import { Component } from 'react';

export default class Banner extends Component {

    render() {
        return (
            <>
            <div id="banner">
            <div className="bannertext"><p>I'm Renata and I'm learning to code</p>
            <p>Check my projects</p>
            <a href="#projects"><img width="30" height="30" src={downArrow} alt="downArrow"></img></a>
            </div>
            </div>
            </>
        )
    }
}
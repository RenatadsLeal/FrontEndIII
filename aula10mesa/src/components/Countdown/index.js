import { Component } from "react";

export default class Coutndown extends Component {
    constructor() {
        super();
        this.state = {
            timer: 60
        }
    }

    componentDidMount() {
        this.timerId = setInterval(this.count, 1000);
    }

    componentDidUpdate() {
        if(this.state.timer === 0){
        clearInterval(this.timerId);
        this.setState({timer : "BOOM!💥"})
        }
    }

    count = () => {
        this.setState({timer: this.state.timer-1})
    }

    render() {
        return (
            <div>
                <h2>{this.state.timer}</h2>
            </div>
        )
    }
}
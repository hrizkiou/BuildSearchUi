import React, {Component} from "react";
import './se.css';
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

class Slide extends Component {
    constructor(props) {
        super(props);
        console.log(this.marks);
    }
    render (){
    return (
            <div className="App">
                <h1>Hello CodeSandbox</h1>
                <div className="sliderArea">
                    <Range
                        marks={{
                            100: `$ 100`,
                            500: `$ 500`
                        }}
                        min={100}
                        max={500}
                        defaultValue={[200, 300]}
                        tipFormatter={value => `$ ${value}`}
                        tipProps={{
                            placement: "top",
                            visible: true
                        }}
                    />
                </div>
            </div>
    )
}
}export default Slide;

import {Component} from "react";
import "src/style/playground.css"
import * as propType from "prop-types";

export class Playground extends Component{
    render() {
        const {images} = this.props


        return (
            <div>
                <h1>Test</h1>
                <ul>
                    {images.map( (i, index) => (
                        <h2 key={index}>{images}</h2>
                    ))}
                </ul>
            </div>
        )
    }
}

Playground.propType = {
    images : propType.arrayOf.string.isRequired,
}
import React, { Component } from "react";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brightness: "100%",
            hover: false
        };
    }

    OnMouse() {
        this.setState({
            brightness: "35%",
            hover: true
        });
    }

    OutMouse() {
        this.setState({
            brightness: "100%",
            hover: false
        });
    }

    render() {
        return (
            <div
                className="product-box"
                onMouseEnter={() => this.OnMouse()}
                onMouseLeave={() => this.OutMouse()}
            >

                <div
                    className="product-image"
                    style={{
                        backgroundImage: `url(${this.props.item.content.images.landscape.url})`,
                        filter: `brightness(${this.state.brightness})`
                    }}>

                </div>
            </div>
        );

    }
}

export default Product;
import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProducts } from "../actions/globalActions";

import './HomePage.css';
import Product from './Product';

class HomePage extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const { error, isLoaded, products } = this.props;
        if (error) {
            return (
                <div className="HomePage">
                    <div className="container">
                        <div>Error: {error.message}</div>
                    </div>
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div className="HomePage">
                    <div className="container">
                        <div>Loading...</div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="HomePage">
                    <div className="container">
                        <div className="products">
                            {products.map((item, index) => (
                                <Product
                                    item={item}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        isLoaded: state.isLoaded,
        error: state.error
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getProducts }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

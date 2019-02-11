import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProducts } from "../actions/globalActions";

import Product from "./Product";

import "../css/ProductsPage.css";
import "../css/spinner.css";

class ProductsPage extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const { error, isLoaded, products } = this.props;
        if (error) {
            return (
                <div className="ProductsPage">
                    <div className="container">
                        <div className="error-message">Error: {error.message}</div>
                    </div>
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div className="ProductsPage">
                    <div className="container">
                        <div className="spinner">
                            <div className="sk-folding-cube">
                                <div className="sk-cube1 sk-cube"/>
                                <div className="sk-cube2 sk-cube"/>
                                <div className="sk-cube4 sk-cube"/>
                                <div className="sk-cube3 sk-cube"/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="ProductsPage">
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
)(ProductsPage);

import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ProductsPage from "./ProductsPage";

import logo from "../assets/viaplay-logo.png";
import "../css/App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Helmet>
                    <title>Viaplay Test</title>
                    <meta name="description" content="Viaplay Programming Test"/>
                </Helmet>
                <header className="app-header">
                    <img src={logo} className="logo" alt="logo"/>
                </header>
                <ProductsPage />
                <footer className="app-footer"/>
            </div>
        );
    }
}

export default App;
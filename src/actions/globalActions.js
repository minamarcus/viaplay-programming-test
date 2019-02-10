import axios from "axios";


export function getProducts() {
    console.log("something happened!");
    return(dispatch) => {
        return axios.get("https://cors-anywhere.herokuapp.com/" + "https://content.viaplay.se/pc-se/serier/samtliga", {
            headers: {
                headers: {"Access-Control-Allow-Origin": "*"}
            },
            responseType: 'json',
        }).then((response) => {
            console.log(response);
            console.log(response.data._embedded["viaplay:blocks"][0]._embedded["viaplay:products"]);
            dispatch(getProductsSuccess(response.data._embedded["viaplay:blocks"][0]._embedded["viaplay:products"]))
            })
            .catch(function (error) {
                console.log(error);
                dispatch(getProductsFail(error))
            });
    }
}

export function getProductsSuccess(products) {
    return {
        type: "GET_PRODUCTS_SUCCESS",
        products: products
    }
}

export function getProductsFail(error) {
    return {
        type: "GET_PRODUCTS_FAIL",
        error: error
    }
}
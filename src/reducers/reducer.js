const initialState = {
    products: {},
    isLoaded: false,
    error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS_SUCCESS":
            return {
                ...state,
                products: action.products,
                isLoaded: true
            };
        case "GET_PRODUCTS_FAIL":
            return {
                ...state,
                error: action.error,
                isLoaded: true,
            };
        default :
            return {
                ...state
            }
    }
};

export default reducer;
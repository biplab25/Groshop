import { PRODUCT_LIST_SUCCESS,PRODUCT_LIST_REQUEST,PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from "../constants/productConstants";

export const listproducts=() => async(dispatch) =>{
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})

        const {data} = await axios.get('')

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        type: PRODUCT_LIST_FAIL,
        payload: error.response
    }
}

export const listProductDetails=(id) => async(dispatch) =>{
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})

        const {data} = await axios.get(`/api/product/$id`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        type: PRODUCT_DETAILS_FAIL,
        payload: error.response
    }
}
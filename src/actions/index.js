import * as Types from "./../constants/ActionType";
import callAPI from "./../utils/apiCaller";

// ==========================================Fetch products===========================================
export const actFetchProductsRequest = () => {
  return (dispatch) => {
    return callAPI("products", "GET", null).then(res => {
      dispatch(actFetchProducts(res.data))
    });
  };
} 

export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products
  }
} 



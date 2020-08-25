import React, { Component } from 'react';
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { actFetchProductsRequest } from "./../../actions/index";

class ProductListPage extends Component {
  componentDidMount(){ // goi len data truoc khi render
    this.props.fetchAllProducts()
  }

  render() {
    var {products} = this.props; // console.log("data",products)
    return (
      <>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ProductList>
              { this.showProducts(products)}
            </ProductList>
          </div>
        </div>
      </>
    );
  }

  showProducts(products){
    var result = null;
    if(products.length > 0) {
      result = products.map((product, index) => {
        return ( 
          <ProductItem // truyen den ProductItem noi se thuc hien cac chuc nang sau
            key={index}
            product={product}
            index = {index}
          />
        );
      });
    }
    return result;
  }
}

const mapStateToProps = state => { // lay tu store
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => { // luu len store
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    }
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);

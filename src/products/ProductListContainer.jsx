import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ProductList from './ProductList';
import * as productActions from '../actions/productActions';
import * as cartActions from '../actions/cartActions';

class ProductListContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleOnAddItem = this.handleOnAddItem.bind(this);
    }

    handleOnAddItem (item) {
        this.props.cartActions.addCartItems(item);
    }

    //componente listo
    async componentWillMount() {
        await this.props.productActions.fetchProducts();
    }

    render() {
        return (
            <ProductList
                loading={this.props.loading}
                products={this.props.products}
                onAddItem={this.handleOnAddItem}
            />
        );
    }
}

ProductListContainer.defaultProps = {
    product: []
};

ProductListContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool.isRequired,
    productActions: PropTypes.objectOf(PropTypes.func).isRequired
};

function mapStateToProps(state) {
    return {
        products: state.productList.products,
        loading: state.productList.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        productActions: bindActionCreators(productActions, dispatch),
        cartActions: bindActionCreators(cartActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
import React, {PropTypes} from 'react';
import {Link} from "react-router";

export default
const Product =
    (
        {
            _id,
            name,
            description,
            image,
            price,
            deliveryStimate,
            category
        }
    ) => (
        <div className={'col-xs-12 col-sm-6 col-lg-4'}>
            <div className={'card'}>
                <Link to={`/detail/${_id}`}>
                    <img className={'card-img-top'} width={'100%'} src={image} alt={description}/>
                </Link>
                <div className={'cart-block'}>
                    <Link to={`/detail/${_id}`}>
                        <h4 className={'cart-title'}>{name}</h4>
                    </Link>
                    <p className={'card-text'}>{description}</p>
                </div>
                <ul className={'list-group list-group-flush'}>
                    <li className={'list-group-item'}>
                        <strong>{price} &euro;</strong>
                    </li>
                    <li className={'list-group-item'}>
                        <strong>Entrega: </strong> {deliveryStimate}
                    </li>
                    <li className={'list-group-item'}>
                        <span className={'badge badge-pill badge info'}>{category}</span>
                    </li>
                </ul>
                <div className={'card-block'}>
                    <button className={'btn btn-primary'}>
                        <span className={'fa fa-cart-plus'}/> Añadir al Carrito
                    </button>
                </div>
            </div>
        </div>
    )
;

Product.prototypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    deliveryStimate: PropTypes.string.isRequired,
    categor: PropTypes.string.isRequired
}
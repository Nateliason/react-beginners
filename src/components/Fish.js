import React from 'react';
import {formatPrice} from '../helpers';
import PropTypes from "prop-types";

class Fish extends React.Component {
    
  render () {
    // Can destructure it to get all the variables
    const { image, name, price, desc, status } = this.props.details
    const isAvailable = status === 'available';
    return (
      <li className="menu-fish">
        <img src={image} alt={name}/>
        <h3 className="fish-name">{name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>
          {isAvailable ? 'Add to Order ' : 'Sold Out'}
        </button>
      </li>
    )
  }
}

export default Fish;
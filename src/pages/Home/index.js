import React from 'react';

import { ProductList } from './styles';
import { MdShoppingCart } from 'react-icons/md';

import { formatPrice } from '../../util/format';

import api from '../../services/api';

export default class Home extends React.Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    try {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      this.setState({
        products: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button type="button">
              <div>
                <MdShoppingCart size={16} color="#fff" /> 3
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

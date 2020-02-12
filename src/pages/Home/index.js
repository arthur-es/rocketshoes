import React from 'react';

import { ProductList } from './styles';
import { MdShoppingCart } from 'react-icons/md';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/58/D12-1407-058/D12-1407-058_zoom1.jpg?ims=544x"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129.90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/58/D12-1407-058/D12-1407-058_zoom1.jpg?ims=544x"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129.90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/58/D12-1407-058/D12-1407-058_zoom1.jpg?ims=544x"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129.90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/58/D12-1407-058/D12-1407-058_zoom1.jpg?ims=544x"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129.90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/58/D12-1407-058/D12-1407-058_zoom1.jpg?ims=544x"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129.90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { getProductsFromCategoryAndQuery } from '../services/api';

class CardList extends React.Component {
  render() {
    const { findResult } = this.props;
    if (findResult.length < 1) {
      return (<p>Nenhum produto foi encontrado</p>);
    }
    return (
      <section id="card-list">
        { findResult.map(({ title, thumbnail, price, id ,category_id}) => (
          <Link data-testid="product-detail-link" key={id} to={`/${category_id}/${id}`}>
            <div data-testid="product">
              <h3>{title}</h3>
              <img src={ thumbnail } alt="imagem do produto" />
              <h5>{price}</h5>
            </div>
          </Link> 
        ))}
      </section>
    );
  }
}

CardList.propTypes = {
  findResult: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;

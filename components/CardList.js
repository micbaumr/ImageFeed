import React from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';

import {getImageFromId} from '../utils/api';
import Card from './Card';

const keyExtractor = ({id}) => id.toString();

export default function CardList({items}) {
  const renderItem = ({item: {id, author}}) => (
    <Card
      fullname={author}
      linkText="comments"
      image={{
        uri: getImageFromId(id),
      }}
    />
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
}

Card.PropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ),
};

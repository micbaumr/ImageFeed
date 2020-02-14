import {Text, ViewPropTypes, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, {useState, useEffect} from 'react';

import {fetchImages} from '../utils/api';
import CardList from '../components/CardList';

export default function Feed({style}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const items = await fetchImages();
    setLoading(false);
    setItems(items);
  };

  if (loading) {
    return <Indicator size="small" />;
  }
  if (error) {
    return <Text>Error...</Text>;
  }
  return (
    <SafeAreaView style={style}>
      <CardList items={items} />
    </SafeAreaView>
  );
}

Feed.propTypes = {
  style: ViewPropTypes.style,
};

Feed.defaultProps = {
  style: {flex: 1},
};

const Indicator = styled.ActivityIndicator`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

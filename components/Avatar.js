import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Avatar({size, backgroundColor, initials}) {
  return (
    <AvatarView size={size} background={backgroundColor} initials={initials}>
      <AvatarInitials>{initials}</AvatarInitials>
    </AvatarView>
  );
}

const AvatarView = styled.View`
  justify-content: center;
  align-items: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
  background-color: ${props => props.background};
`;
const AvatarInitials = styled.Text`
  text-transform: uppercase;
  color: white;
`;
Avatar.propTypes = {
  size: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
};

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import getAvatarColor from '../utils/getAvatarColor';
import getInitials from '../utils/getInitials';
import Avatar from './Avatar';

export default function AuthorRow({fullname, linkText, onPressLinkText}) {
  return (
    <Container>
      <Avatar initials="MB" size={35} backgroundColor={'blue'} />
      <Name numberOfLines={1}>{fullname}</Name>
      {!!linkText && (
        <TouchableOpacity onPress={onPressLinkText}>
          <Text numberOfLines={1}>{linkText}</Text>
        </TouchableOpacity>
      )}
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
`;
const Name = styled.Text`
  flex: 1;
  margin-left: 6px;
  margin-right: 6px;
`;
AuthorRow.propTypes = {
  fullname: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func.isRequired,
};

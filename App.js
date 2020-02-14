import React from 'react';
import styled from 'styled-components';
import Feed from './screens/Feed';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Platform} from 'react-native';

export default function App() {
  return (
    <Container>
      <Feed />
    </Container>
  );
}

const platformVersion =
  Platform.OS === 'ios' ? parseInt(platformVersion, 10) : platformVersion;

const marginTop = getStatusBarHeight();
const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  /* margin-top: ${marginTop}px; */
  background-color: #fff;
  margin-top: ${
    Platform.OS === 'adroid' || platformVersion < 11 ? marginTop : 0
  }px;
`;

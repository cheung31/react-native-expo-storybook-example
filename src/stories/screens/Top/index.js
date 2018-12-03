import React from 'react';
import { Text } from 'react-native';
import { CenterView, Button } from '../../components';

export default ({ title, buttonLabel }) => (
  <CenterView>
    <Text>{title}</Text>
    <Button>
      <Text>{buttonLabel}</Text>      
    </Button>
  </CenterView>
) 
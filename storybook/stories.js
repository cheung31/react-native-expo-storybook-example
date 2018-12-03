import React from 'react';
import { Text, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { text } from '@storybook/addon-knobs';

import {
  Button, Welcome,
} from '../src/stories/components';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => {
    const label = text('Label', 'Hello Button');
    return (
      <CenteredView>
        <Button onPress={action('clicked-text')}>
          <Text>{label}</Text>
        </Button>
      </CenteredView>
  )})
  .add('with some emoji', () => (
    <CenteredView>
      <Button onPress={action('clicked-emoji')}>
        <Text>😀 😎 👍 💯</Text>
      </Button>
    </CenteredView>
  ));


const CenteredView = ({ children }: any) => (
  <View style={style}>
    {children}
  </View>
);

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};
  